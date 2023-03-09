import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: 1fr;
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`

export const Card = styled.article`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 100%;
    margin: auto;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Role = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const SocialLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Link = styled.li`
  ${({ theme }) => css`
    display: block;
    > a {
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.texts};
  `}
`
