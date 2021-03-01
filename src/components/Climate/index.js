import { useEffect, useState } from 'react'

import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayRain,
  WiThunderstorm,
  WiSnow,
  WiFog
} from 'react-icons/wi'

import { getTimeOfDay } from '../../utils'

import { getClimate } from '../../services'

import { Container, Icon } from './styles'

function ClimateIcon({ timeOfDay, climateIconCode }) {
  const isDay = timeOfDay === 'day'
  const switchIcons = {
    '01': isDay ? <WiDaySunny /> : <WiNightClear />,
    '02': <WiDayCloudy />,
    '03': <WiCloud />,
    '04': <WiCloudy />,
    '09': <WiRain />,
    '10': <WiDayRain />,
    '11': <WiThunderstorm />,
    '13': <WiSnow />,
    '50': <WiFog />
  }

  return <Icon> {switchIcons[climateIconCode]} </Icon>
}

export default function Climate() {
  const [temperature, setTemperature] = useState(0)
  const [climateIconCode, setClimateIconCode] = useState('01')
  const [timeOfDay] = useState(getTimeOfDay(true))

  useEffect(() => {
    const setTemperatureAndClimateIconCode = async () => {
      const { temperature, iconCode } = await getClimate()

      setTemperature(temperature)
      setClimateIconCode(iconCode)
    }

    setTemperatureAndClimateIconCode()
  }, [])

  return (
    <Container>
      <ClimateIcon climateIconCode={climateIconCode} timeOfDay={timeOfDay} />
      <strong>{temperature}°</strong>
    </Container>
  )
}
