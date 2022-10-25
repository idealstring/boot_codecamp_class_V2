import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
      picture
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;
