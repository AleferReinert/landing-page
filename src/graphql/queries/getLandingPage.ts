import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
      button {
        label
        url
      }
    }
  }

  query {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
