import React from 'react'
import Heading from 'components/Heading'
import Container from 'components/Container'
import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <>
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map(({ name, logo }) => (
            <S.Icon key={name}>
              <S.Icons
                src={getImageUrl(logo.data.attributes.url)}
                alt={name}
                loading='lazy'
              />
              <S.IconsName>{name}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  </>
)

export default SectionTech
