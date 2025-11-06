import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Telegram bot webhook для приема и обработки сообщений
    Args: event - dict с httpMethod, body от Telegram
          context - объект с request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'POST')
    
    # Handle CORS OPTIONS request
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
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        # Parse Telegram update
        body_str = event.get('body', '{}')
        update = json.loads(body_str)
        
        # Extract message data
        message = update.get('message', {})
        chat_id = message.get('chat', {}).get('id')
        text = message.get('text', '')
        user_name = message.get('from', {}).get('first_name', 'Гость')
        
        # Bot token from environment
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        
        if not bot_token:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Bot token not configured'})
            }
        
        # Prepare response message
        if text.startswith('/start'):
            response_text = (
                f"Привет, {user_name}! 👋\n\n"
                "Я бот компании TOPGUN.\n\n"
                "Чем могу помочь?\n"
                "- Напишите ваш вопрос или заявку\n"
                "- Наши менеджеры ответят в ближайшее время"
            )
        else:
            response_text = (
                f"Спасибо за сообщение, {user_name}!\n\n"
                f"Мы получили ваш запрос:\n\"{text}\"\n\n"
                "Наш менеджер свяжется с вами в ближайшее время."
            )
        
        # Send response using requests (will be in requirements.txt)
        import requests
        
        send_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        payload = {
            'chat_id': chat_id,
            'text': response_text,
            'parse_mode': 'HTML'
        }
        
        requests.post(send_url, json=payload)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'ok': True})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e)})
        }
