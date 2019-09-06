let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.subscribe({
        Protocol: 'http',
        Endpoint: 'http://indunilRajapakse.com',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestAddTopicSubscription'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });


    callback(null, { "message": "Successfully executed:HTTP" });
}