import { gql } from 'apollo-server'
import nct from './data/nct.json'
// if we add other groups, will we have to import each one individually?
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
// Also don't really understand what an enum is??

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
// will this change (line 29) if we add more groups?
