import json
import os
import psycopg2
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Save application form data to database
    Args: event with httpMethod, body; context with request_id
    Returns: HTTP response with statusCode, headers, body
    '''
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
    name = body_data.get('name', '')
    email = body_data.get('email', 'noemail@example.com')
    phone = body_data.get('phone', '')
    message = body_data.get('message', '')
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'})
        }
    
    database_url = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    cur.execute(
        "INSERT INTO applications (name, email, phone, message) VALUES (%s, %s, %s, %s) RETURNING id",
        (name, email, phone, message)
    )
    
    application_id = cur.fetchone()[0]
    conn.commit()
    
    cur.close()
    conn.close()
    
    try:
        gmail_user = os.environ.get('GMAIL_USER')
        gmail_password = os.environ.get('GMAIL_APP_PASSWORD')
        email_to = os.environ.get('EMAIL_TO')
        
        if gmail_user and gmail_password and email_to:
            msg = MIMEMultipart('alternative')
            msg['Subject'] = f'Новая заявка #{application_id} с сайта'
            msg['From'] = gmail_user
            msg['To'] = email_to
            
            html_body = f"""
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #ff6600;">Новая заявка на мастер-класс</h2>
                <p><strong>Номер заявки:</strong> #{application_id}</p>
                <p><strong>Имя:</strong> {name}</p>
                <p><strong>Телефон:</strong> {phone}</p>
                <p><strong>Сообщение:</strong> {message if message else 'Не указано'}</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;">
                <p style="color: #666; font-size: 12px;">Это автоматическое уведомление с сайта</p>
              </body>
            </html>
            """
            
            part = MIMEText(html_body, 'html', 'utf-8')
            msg.attach(part)
            
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
                smtp.login(gmail_user, gmail_password)
                smtp.send_message(msg)
    except Exception as e:
        pass
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'id': application_id,
            'message': 'Application saved successfully'
        })
    }