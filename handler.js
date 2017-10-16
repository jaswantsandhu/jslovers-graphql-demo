'use strict';
const posts = require("./data/posts")
module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(posts)
  };
  callback(null, response);
};
