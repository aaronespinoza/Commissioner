import { gql } from '@apollo/client';


export const ADD_EXAMPLE = gql`
  mutation addExample($exampleText: String!) {
    addExample(exampleText: $exampleText) {
      _id
      exampleText
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $favoriteTeam: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, favoriteTeam: $favoriteTeam, password: $password) {
      token
      user {
        _id
      }
    }
  }
` // mutation addUser creates user with variables, token user _id functionality?

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


