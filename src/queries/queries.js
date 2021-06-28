import { gql } from "@apollo/client";

export const getAllAuthor = gql`
  query {
    authors {
      name
      id
    }
  }
`;

export const getAllBook = gql`
  query {
    books {
      name
      id
    }
  }
`;