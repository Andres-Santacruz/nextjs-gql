import { gql } from "@apollo/client";

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

export const UPLOAD_FILES = gql`
  mutation uploadFile($data: FileUploadInput!) {
    uploadFile(data: $data) {
      success
      error
    }
  }
`;
