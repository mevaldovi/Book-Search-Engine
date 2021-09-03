const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    password: String
    bookCount: Int!
    savedBooks: [Book]!
  }



  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: bookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
