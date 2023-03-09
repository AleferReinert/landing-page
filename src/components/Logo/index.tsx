import React from 'react'
import { LogoAttributesProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ alternativeText, url }: LogoAttributesProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
