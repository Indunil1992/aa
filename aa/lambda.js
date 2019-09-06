let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.subscribe({
        Protocol: 'http',
        Endpoint: 'https://052p9kjn18.execute-api.us-east-1.amazonaws.com/test11/indunil/qa/sns',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestAddTopicSubscription'
    }).promise()
        .then(data => {
            console.log("pass");
            console.log(data);
            // your code goes here
        })
        .catch(err => {
            console.log("failll");
            console.log(err);
            // error handling goes here
        });


    callback(null, { "message": "Successfully executed:HTTP" });
}