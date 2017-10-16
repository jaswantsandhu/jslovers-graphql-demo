'use strict';
const createResponse = require("./response");
const Schema = require("./schema");
const {graphql} = require("graphql");

const handler = (event, context, callback) => {

    const resource = JSON.parse(event.body);
    const type = Object.keys(resource)[0];

    graphql(Schema, resource[type], null, {}, {}).then((body) => {
        // context.callbackWaitsForEmptyEventLoop = false;
        callback(null, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            statusCode: 200,
            body: JSON.stringify(body)
        })
    })

};

module.exports = {
    graphql: handler
};
