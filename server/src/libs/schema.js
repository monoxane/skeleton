import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      getStatus: {
        name: 'Get Status Slug',
        description: 'Returns a status slug to be displayed on the UI homepage',
        type: new GraphQLList(
          GraphQLString
        ),
        resolve: () => {
          return ['success', 'All Systems Go', 'The Skeleton Is Running']
        }
      }
    }
  })
})

export { schema }
