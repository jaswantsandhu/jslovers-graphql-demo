const {GraphQLSchema, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt} = require('graphql');

const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        name: {
            description: 'enter description for name',
            type: new GraphQLNonNull(GraphQLString)
        },
        id: {
            description: 'enter description for id',
            type: new GraphQLNonNull(GraphQLInt)
        },
        email: {
            description: 'enter description for email',
            type: new GraphQLNonNull(GraphQLString)
        },
        gender: {
            description: 'enter description for email',
            type: new GraphQLNonNull(GraphQLString)
        },
        langauge: {
            description: 'enter description for email',
            type: new GraphQLNonNull(GraphQLString)
        },
        shirt_size: {
            description: 'enter description for email',
            type: new GraphQLNonNull(GraphQLString)
        },
        university: {
            description: 'enter description for email',
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});

module.exports = {
    User
};