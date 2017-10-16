const {
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require("graphql");

const invoke = require("./invoke");

const Post = new GraphQLObjectType({
    name: "PostItem",
    fields: {
        guid: {
            type: GraphQLString
        },
        heading: {
            type: GraphQLString
        },
        summary: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        createdOn: {
            type: GraphQLString
        },
        modifiedOn: {
            type: GraphQLString
        },
        author: {
            type: GraphQLString
        },
        media: {
            type: GraphQLString
        }
    }
})

const Schema = new GraphQLSchema({
    // mutation: Mutations,
    query: new GraphQLObjectType({
        name: 'RootQueries',
        fields: {
            Post: {
                type: Post,
                name: "Post"
            },
            Posts: {
                description: '',
                type: new GraphQLNonNull(new GraphQLList(Post)),
                resolve: function (obj, args, context) {
                    context = Object.assign({}, context);
                    return invoke({FunctionName: "aws-nodejs-dev-hello", Payload: context}).then(function (data) {
                        const content = JSON.parse(data.body);
                        return content
                    })
                }
            }
        }
    })
})

module.exports = Schema;