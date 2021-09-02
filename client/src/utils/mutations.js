import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: bookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;





// export const LOGIN_USER = gql
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// ;


// export const ADD_USER = gql
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       username
//       email
//       password
//     }
//   }
// ;

// export const SAVE_BOOK = gql
//   mutation saveBook($title: String!) {
//     saveBook(title: $title) {
//       bookAuthor
//       description
//       title
//       image
//       link
//     }
//   }
// ;

// export const REMOVE_BOOK= gql
//   mutation removeBook($bookId: String!, $title: String!) {
//     removeBook(title: $title) {
//      bookId
//      title
//     }
//   }
// ;


