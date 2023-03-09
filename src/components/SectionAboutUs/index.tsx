import React from 'react'
import Heading from 'components/Heading'
import Container from 'components/Container'
import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

function SectionAboutUs({ title, authors }: SectionAboutUsProps) {
  return (
    <>
      <Container>
        <Heading reverseColor>{title}</Heading>

        <S.Content>
          {authors.data.map((profile, index) => (
            <S.Card key={index}>
              <S.Image
                src={getImageUrl(profile.attributes.photo.data.attributes.url)}
                loading='lazy'
                alt={profile.attributes.photo.data.attributes.alternativeText}
              />
              <S.Name>{profile.attributes.name}</S.Name>
              <S.Role>{profile.attributes.role}</S.Role>
              <S.SocialLinks>
                {profile.attributes.socialLinks.map((item) => (
                  <S.Link key={item.title}>
                    <a href={item.url} title={item.title}>
                      {icons[item.title.toLowerCase() as keyof typeof icons]}
                    </a>
                  </S.Link>
                ))}
              </S.SocialLinks>
              <S.Description>{profile.attributes.description}</S.Description>
            </S.Card>
          ))}
        </S.Content>
      </Container>
    </>
  )
}

export default SectionAboutUs
