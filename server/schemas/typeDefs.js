const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: INT!
    savedBooks: [Book]! 
  }
/*MIGHT have to go ahead and change all these Book keys if routes in resolvers.js don't run*/
  type Book {
    bookId: ID
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
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
    saveBook(bookText: [String]!, bookAuthor: [String]!,  ): Book
    removeBook(bookId: ID!): User





    addBook(bookText: String!): Book
    addBook(bookId: ID!): Book
    removeBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
