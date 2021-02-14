import React from 'react'

import { FiCloudRain, FiSun, FiInfo } from 'react-icons/fi'
import { 
  Container, Quote, Climate, 
  IconStyles, Days, Time, 
  HelloMessage, Main, Info
} from './styles'

function Home() {
  return (
    <Container>
    	<Quote>
    		<q>I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.</q>
    		<h3>Marilyn Monroe</h3>
    	</Quote>
    	
      <Climate>
        <FiCloudRain style={IconStyles} />
        <strong>19°</strong>
      </Climate>

      <Main>
        <HelloMessage>
          <FiSun style={IconStyles} />
          good morning, raphael devs
        </HelloMessage>
        <Time>11:37</Time>
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