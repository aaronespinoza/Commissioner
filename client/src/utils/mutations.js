import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $favoriteTeam: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, favoriteTeam: $favoriteTeam, password: $password) {
      token
      user {
        _id
        favoriteTeam
      }
    }
  }
`; // mutation addUser creates user with variables, token user _id functionality?

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
    }
  }
`;

export const UPDATE_TEAM = gql`
  mutation updateTeam($id: ID!,$favoriteTeam: String! ) {
    updateTeam(id: $id, favoriteTeam: $favoriteTeam) {
      token
      user{
      _id
      favoriteTeam}
    }
  }
`;