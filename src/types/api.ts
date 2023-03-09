// landing-page.data.attributes.logo.data.attributes 
export type LogoAttributesProps = {
    alternativeText: string
    url: string
}

// landing-page.data.attributes.logo.data
export type LogoDataProps = {
    attributes: LogoAttributesProps
}

// landing-page.data.attributes.logo
export type LogoProps = {
    data: LogoDataProps
}

// landing-page.data.attributes
export type LandingPageAttributesProps = {
  logo: LogoProps
}

// landing-page.data
export type LandingPageDataProps = {
    attributes: LandingPageAttributesProps
}

// landing-page
export type LandingPageProps = {
  data: LandingPageDataProps
}