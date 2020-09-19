import { gql } from '@apollo/client';

const MoneyFragment = gql`
  fragment MoneyFragment on Money {
    amount
    currency
    localized
  }
`;

const TaxedMoneyFragment = gql`
  fragment TaxedMoneyFragment on TaxedMoney {
    currency
    gross {
      ...MoneyFragment
    }
    net {
      ...MoneyFragment
    }
    tax {
      ...MoneyFragment
    }
  }
  ${MoneyFragment}
`;

const FirstProductsQuery = gql`
  query FirstProducts {
    products(first: 5) {
      edges {
        node {
          id
          name
          description
          minimalVariantPrice {
            ...MoneyFragment
          }
        }
      }
    }
    ${MoneyFragment}
  }
`;
