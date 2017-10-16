const createResponse = (statusCode, body) => ({
    statusCode,
    headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS
    },
    body: JSON.stringify(body)
});

module.exports = {
    createResponse
};