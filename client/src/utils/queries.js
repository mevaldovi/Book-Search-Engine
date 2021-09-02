import { gql } from "@apollo/client";

//ok done but don't I also need to make the other six query/mutation requests pulled fotm typeDefs??? Confused.
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;
