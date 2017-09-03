const {convertToSchema} = require("jsontographql");
const fs = require("fs");

const schemaJSON = {
    User: {
        name: "jaswant",
        id: 1,
        email: "jaswant@jslovers.com"
    },
    Users: [
        {
            name: "jaswant",
            id: 1,
            email: "jaswant@jslovers.com"
        }
    ]
}

convertToSchema(schemaJSON, {
    splitSchemaFiles: true,
    cwd: "./",
    maps: {
        Users: {
            type: "User",
            isList: true
        }
    },
    resolves: {
        User: null
    }
});