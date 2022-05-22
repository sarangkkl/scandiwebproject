import { gql } from '@apollo/client'

export const LOAD_PRODUCTS = gql`
    query{
        categories {
            name
            products {
              id,
              name,
              inStock,
              gallery,
              category
            }
          }
    }
`