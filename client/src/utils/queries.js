import { gql } from '@apollo/client';


export const QUERY_EXAMPLES = gql`
  query getExamples {
    examples {
      _id
      exampleText
    }
  }
`;

export const QUERY_ME = gql`
query{
  me{
    _id
    firstName
    lastName
    email
    favoriteTeam
  }
}
`