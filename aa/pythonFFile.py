import boto3
sns = boto3.client("sns")

def handler(event, context):

    try:
        data = sns.set_topic_attributes(
            AttributeName='Policy',
            AttributeValue='setPolicy',
            TopicArn='arn:aws:sns:us-east-1:318300609668:amplify_codecommit_topic'
        )
    except BaseException as e:
        print(e)
        raise(e)
    
    return {"message": "Successfully executed"}
