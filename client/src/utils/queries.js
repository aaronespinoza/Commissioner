import { gql } from '@apollo/client';


export const QUERY_EXAMPLES = gql`
  query getExamples {
    examples {
      _id
      exampleText
    }
  }
`;
