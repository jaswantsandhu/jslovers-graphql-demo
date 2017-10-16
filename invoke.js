const AWS = require("aws-sdk");
AWS.config.region = "us-east-1";
const invoke = function (params) {
    var Lambda = new AWS.Lambda();

    var p = {
        FunctionName: params.FunctionName,
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(params.Payload),
        LogType: 'None'
    };

    return new Promise(function (resolve, reject) {
        Lambda
            .invoke(p, function (err, data) {
                if (err) 
                    return reject(err);
                var payload = JSON.parse(data.Payload);
                if (payload.errorMessage) 
                    return reject(payload);
                return resolve(payload);
            });
    });

};

module.exports = invoke;
