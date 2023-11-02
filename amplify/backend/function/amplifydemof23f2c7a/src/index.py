import json
import datetime


def handler(event, context):
  print('received event:')
  print(event)
  current_time = datetime.datetime.now().time()
  body = {
      'message': 'Hello, the current time is ' + str(current_time)
  }
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(body)
  }