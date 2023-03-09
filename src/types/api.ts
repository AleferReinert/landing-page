export type LogoProps = {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
}

export type HeaderProps = {
    title: string
    description: string
    image: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    button?: {
      label: string
      url: string
    }
}

export type LandingPageProps = {
    data: {
        attributes: {
            logo: LogoProps
            header: HeaderProps
        }
    }
} 
