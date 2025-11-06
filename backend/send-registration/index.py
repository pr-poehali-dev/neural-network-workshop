'''
Business: Send registration data from website form to email via Gmail SMTP
Args: event - dict with httpMethod, body containing name and phone
      context - object with request_id attribute
Returns: HTTP response dict with success/error status
'''

import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    name: str = body_data.get('name', '').strip()
    phone: str = body_data.get('phone', '').strip()
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }
    
    gmail_user = os.environ.get('GMAIL_USER')
    gmail_app_password = os.environ.get('GMAIL_APP_PASSWORD')
    email_to = os.environ.get('EMAIL_TO')
    
    if not gmail_user or not gmail_app_password or not email_to:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Настройки email не установлены'})
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая регистрация: {name}'
    msg['From'] = gmail_user
    msg['To'] = email_to
    
    html_content = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #00FF99; border-bottom: 2px solid #00FF99; padding-bottom: 10px;">
            🎯 Новая заявка с сайта
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Имя:</strong> 
              <span style="color: #000; font-size: 16px;">{name}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Телефон:</strong> 
              <span style="color: #000; font-size: 16px;">{phone}</span>
            </p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">
            Отправлено через форму регистрации на сайте
          </p>
        </div>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_content, 'html'))
    
    # Send to Telegram
    telegram_sent = False
    telegram_bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if telegram_bot_token and telegram_chat_id:
        try:
            import requests
            telegram_message = (
                f"🎯 <b>Новая заявка с сайта</b>\n\n"
                f"<b>Имя:</b> {name}\n"
                f"<b>Телефон:</b> {phone}"
            )
            
            send_url = f"https://api.telegram.org/bot{telegram_bot_token}/sendMessage"
            payload = {
                'chat_id': telegram_chat_id,
                'text': telegram_message,
                'parse_mode': 'HTML'
            }
            
            response = requests.post(send_url, json=payload, timeout=10)
            if response.status_code == 200:
                telegram_sent = True
        except:
            pass
    
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(gmail_user, gmail_app_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True, 
                'message': 'Заявка отправлена',
                'telegram_sent': telegram_sent
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка отправки email: {str(e)}'})
        }