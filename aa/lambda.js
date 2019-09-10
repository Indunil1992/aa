let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    sns.subscribe({
        Protocol: 'lambda',
        Endpoint: 'arn:aws:lambda:us-east-1:318300609668:function:lambda',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            console.log("dataaaa");
            console.log(data);
            // your code goes here
        })
        .catch(err => {
            console.log("fail");
            console.log(err);
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}
