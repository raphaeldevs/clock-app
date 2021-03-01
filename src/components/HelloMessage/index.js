import { FiSun, FiMoon } from 'react-icons/fi'

import { getTimeOfDay } from '../../utils'

import { Container, Icon } from './styles'

function TimeOfDayIcon() {
  const icons = {
    day: <FiSun />,
    night: <FiMoon />
  }

  return <Icon> {icons[getTimeOfDay(true)]} </Icon>
}

export default function HelloMessage() {
  return (
    <Container>
      <TimeOfDayIcon />
      good {getTimeOfDay()}, raphael devs
    </Container>
  )
}
