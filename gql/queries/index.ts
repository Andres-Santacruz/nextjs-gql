import { gql } from "@apollo/client";

export const GET_ANYTHING = gql`
query getAnything{
  listAnything{
    edges{
      cursor
      node{
        anything
      }
    }
  }
}
`;

