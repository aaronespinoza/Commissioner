import { gql } from '@apollo/client';


export const ADD_EXAMPLE = gql`
  mutation addExample($exampleText: String!) {
    addExample(exampleText: $exampleText) {
      _id
      exampleText
    }
  }
`;


