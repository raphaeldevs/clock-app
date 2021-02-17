import { FiSun, FiMoon } from 'react-icons/fi'

import { getTimeOfDay } from '../../utils'

import { Container, Icon } from './styles'

export default function HelloMessage() {
  function TimeOfDayIcon() {
    const icons = {
      day: <FiSun />,
      night: <FiMoon />
    }

    return <Icon> { icons[getTimeOfDay(true)] } </Icon>
  }

  return (
    <Container>
      <TimeOfDayIcon />
      good { getTimeOfDay() }, raphael devs
    </Container>
  )
}
