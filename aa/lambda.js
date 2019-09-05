let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.setTopicAttributes({
        AttributeName: 'DisplayName',
        AttributeValue: 'Set T A as indunil',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:testsnsindunil'
    }).promise()
        .then(data => {
            console.log("dataaa");
            console.log(data);
            // your code goes here
        })
        .catch(err => {
            console.log("errorrrr");
            console.log(err);
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}