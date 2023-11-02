import json
import datetime
import boto3

client = boto3.client('dynamodb')

def handler(event, context):
  print('received event:')
  print(event)

  data = client.scan(
    TableName='dynamo7d32e73b-dev'
  )
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(data)
  }

