import React, { useEffect } from 'react'
import Slider from 'react-slick'
import Container from 'components/Container'
import Heading from 'components/Heading'
import * as S from './styles'
import { SectionReviewsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import ResizeObserver from 'resize-observer-polyfill'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

function SectionReviews({ title, reviews }: SectionReviewsProps) {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })
    texts.forEach((text) => observer.observe(text))
  })

  return (
    <>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.Content>
          <Slider {...settings}>
            {reviews.map(({ name, photo, text }, index) => (
              <S.Card key={index}>
                <S.User>
                  <S.Image
                    src={getImageUrl(photo.data.attributes.url)}
                    loading='lazy'
                    alt={photo.data.attributes.alternativeText}
                  />
                  <S.Name>{name}</S.Name>
                </S.User>
                <S.Text>
                  <input type='checkbox' id={`review-${index}`} />
                  <p className='description'>{text}</p>
                  <label className='label-more' htmlFor={`review-${index}`}>
                    Ver tudo
                  </label>
                </S.Text>
              </S.Card>
            ))}
          </Slider>
        </S.Content>
      </Container>
    </>
  )
}

export default SectionReviews
