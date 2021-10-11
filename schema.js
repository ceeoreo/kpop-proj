import fs from 'fs'
import { gql } from 'apollo-server';
import nct from './data/nct.json';

const schema = fs.readFileSync("./schema.graphql", "utf8").toString();

export const typeDefs = gql`
  ${schema}
`;

export const resolvers = {
  Query: {
    groups: () => [nct]
  },
  Member: {
    age: (member) => {
      const now = new Date();
      const birthDate = new Date(member.birthDate);
      return now.getFullYear() - birthDate.getFullYear();
    }
  }
}