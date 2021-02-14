import React from 'react'

import { FiInfo } from 'react-icons/fi'

import Quote from '../../components/Quote'
import Climate from '../../components/Climate'
import HelloMessage from '../../components/HelloMessage'
import Time from '../../components/Time'

import { Container, Days, Main, Info } from './styles'

function Home() {
  return (
    <Container>
    	<Quote />
    	
      <Climate />

      <Main>
        <HelloMessage />

        <Time />

        <Info>
          <FiInfo size="2.2rem" />
          Tall trees with dried leaves on ground
        </Info>
      </Main>

      <Days>
        <span>Day</span> <strong>237</strong>
      </Days>
    </Container>
  )
}

export default Home