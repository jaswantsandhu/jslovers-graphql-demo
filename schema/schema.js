const {
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const {User} = require("./user.js");
const axios = require("axios");

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Root',
        fields: {
            User: {
                description: 'enter description for User',
                type: new GraphQLNonNull(User),
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: function (obj, args, context) {
                    // http://www.mocky.io/v2/59ac0be31000000c0af9c224
                    return axios
                        .get("http://www.mocky.io/v2/59ac047b100000a009f9c216")
                        .then((response) => {
                            return response.data[args.id - 1];
                        })
                }
            },
            Users: {
                description: 'enter dasdadasd for Users',
                type: new GraphQLNonNull(new GraphQLList(User)),
                resolve: function (obj, args, context) {
                    return axios
                        .get("http://www.mocky.io/v2/59ac047b100000a009f9c216")
                        .then((response) => {
                            console.log(response);
                            return response.data;
                        })
                }
            }
        }
    })
})
module.exports = {
    Schema
}