import { FiSun, FiMoon } from 'react-icons/fi'

import { getTimeOfDay } from '../../utils'

import { Container, Icon } from './styles'

export default function HelloMessage() {
  const icons = {
    day: <FiSun />,
    night: <FiMoon />
  }

  const icon = getTimeOfDay(true) as keyof typeof icons
  
  return (
    <Container>
      <Icon> {icons[icon]} </Icon>
      good {getTimeOfDay()}, raphael devs
    </Container>
  )
}
