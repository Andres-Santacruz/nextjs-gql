import {gql} from "@apollo/client"

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      refreshExpiresIn
      refreshToken
      payload
      token
    }
  }
`;