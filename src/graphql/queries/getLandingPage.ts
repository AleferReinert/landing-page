import { gql } from 'graphql-request'

const GET_LANDIND_PAGE = gql`
  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`

export default GET_LANDIND_PAGE
