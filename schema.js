const { convertToSchema } = require("jsontographql");
const Pitchman = require("./data/Pitchman.json");
const fs = require("fs");

const schema = convertToSchema(Pitchman);
fs.writeFile('schema/pitchman-schema.js', schema, function () {})