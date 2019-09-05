import boto3
sns = boto3.client("sns")

def handler(event, context):
    try:
        data = sns.publish(
            Message='run ',
            Subject='test sns merge ',
            MessageAttributes={},
            MessageStructure='String',
            TopicArn='arn:aws:sns:us-east-1:318300609668:TestSNS'
        )
    except BaseException as e:
        print(e)
        raise(e)
    
    return {"message": "Successfully executed"}
