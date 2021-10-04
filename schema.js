import { gql } from 'apollo-server';
import nct from './data/nct.json';

export const typeDefs = gql`
  type Query {
    groups: [Group!]!
  }

  type Group {
    name: String!
    members: [Member!]!
  }

  enum Role {
    SINGER
    RAPPER
    DANCER
  }

  type Member {
    name: String!
    age: Int!
    roles: [Role!]!
  }
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