export type Image = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type TechIcon = {
  name: string
  logo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export type Concepts = {
  title: string
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  attributes: {
    name: string
    photo: Image
    role: string
    socialLinks: SocialLink[]
    description: string
  }
}

export type Review = {
  photo: Image
  name: string
  text: string
}

export type Question = {
  question: string
  answer: string
}

export type HeaderProps = {
  title: string
  description: string
  image: Image
  button?: {
    label: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    data: Author[]
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  data: {
    attributes: {
      logo: Image
      header: HeaderProps
      sectionAboutProject: SectionAboutProjectProps
      sectionTech: SectionTechProps
      sectionConcepts: SectionConceptsProps
      sectionModules: SectionModulesProps
      sectionAgenda: SectionAgendaProps
      pricingBox: PricingBoxProps
      sectionAboutUs: SectionAboutUsProps
      sectionReviews: SectionReviewsProps
      sectionFaq: SectionFaqProps
    }
  }
}
