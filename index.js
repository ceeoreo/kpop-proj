import { ApolloServer, gql } from 'apollo-server'
import { typeDefs, resolvers } from './schema.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  mockEntireSchema: false
});

server.listen().then(({url}) => {
  console.log(`🧑‍🎤 Server running at ${url}`)
});
