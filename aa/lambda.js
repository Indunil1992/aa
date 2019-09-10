let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.confirmSubscription({
        Token: '2336412f37fb687f5d51e6e241dbca52e6afbd294a3a21ab82bbfe3763c100369ac6cbf4f840fe02081f7192b249e5ddc24c4ea5ff3f22c2845814affd4985b509a93a36e7bbf7b40850bf3757cd3c0cb238641c76389c3fde16b308b6fb0bc2a5916d0e2f986a8457503908ed6f0027',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS',
        AuthenticateOnUnsubscribe: 'false'
    }).promise()
        .then(data => {
            console.log("passss");
            console.log(data);
            // your code goes here
        })
        .catch(err => {
            console.log("errrrr");
            console.log(err);
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}
