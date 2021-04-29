import { useEffect, useState } from 'react'

import { FiInfo } from 'react-icons/fi'

import Quote from '../../components/Quote'
import Climate from '../../components/Climate'
import HelloMessage from '../../components/HelloMessage'
import Time from '../../components/Time'

import { getYearDay, sentenceToTitleCase } from '../../utils'
import { getRandomImage } from '../../services'

import { Container, Days, Main, Info } from './styles'

function Home() {
  const [backgroundImage, setBackgroundImage] = useState({
    altDescription: 'Loading...',
    imageUrl: ''
  })

  useEffect(() => {
    const getAndSetBackgroundImage = async () => {
      setBackgroundImage(await getRandomImage())
    }

    getAndSetBackgroundImage()
  }, [])

  return (
    <Container backgroundImage={backgroundImage?.imageUrl}>
      <Quote />

      <Climate />

      <Main>
        <HelloMessage />

        <Time />

        <Info>
          <FiInfo size="2.2rem" />
          {backgroundImage.altDescription
            ? sentenceToTitleCase(backgroundImage.altDescription)
            : 'An amazing image...'}
        </Info>
      </Main>

      <Days>
        <span>Day</span> <strong>{getYearDay()}</strong>
      </Days>
    </Container>
  )
}

export default Home
