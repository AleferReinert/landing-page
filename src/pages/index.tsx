import React from 'react'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import client from 'graphql/client'
import { GetStaticProps } from 'next'
import { LandingPageProps } from 'types/api'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'

const Index = ({
  data: {
    attributes: {
      logo,
      header,
      sectionAboutProject,
      sectionTech,
      sectionConcepts,
      sectionModules,
      sectionAgenda,
      pricingBox,
      sectionAboutUs,
      sectionReviews,
      sectionFaq
    }
  }
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject {...sectionAboutProject} />
    <SectionTech {...sectionTech} />
    <SectionConcepts {...sectionConcepts} />
    <SectionModules {...sectionModules} />
    <SectionAgenda {...sectionAgenda} />
    <PricingBox {...pricingBox} />
    <SectionAboutUs {...sectionAboutUs} />
    <SectionReviews {...sectionReviews} />
    <SectionFaq {...sectionFaq} />
    <Footer />
    <JsonSchema />
  </>
)

type landingPage = {
  landingPage: LandingPageProps
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage }: landingPage = await client.request(GET_LANDING_PAGE)
  return { props: { ...landingPage } }
}

export default Index
