import { gql } from '@apollo/client';

const FIRST_PRODUCTS_QUERY = gql`
  query FirstProducts {
    products(first: 5) {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;
