let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.setTopicAttributes({
        AttributeName: 'Policy',
        AttributeValue: '"Id": "__default_policy_ID"',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            console.log("dataaa");
            console.log(data);
            // your code goes here
        })
        .catch(err => {
            console.log(err);
            console.log("errrr");
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}