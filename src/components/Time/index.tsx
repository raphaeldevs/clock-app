import { useState, useEffect } from 'react'

import { TimeView } from './styles'

import { getTime } from '../../utils'

export default function Time() {
  const [time, setTime] = useState(getTime())

  const getFormattedTime = () => {
    const { hours, minutes } = time

    const formattedHours = String(hours).padStart(2, '0')

    const formattedMinutes = String(minutes).padStart(2, '0')

    return `${formattedHours}:${formattedMinutes}`
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => clearInterval(intervalID)
  }, [])

  return <TimeView>{getFormattedTime()}</TimeView>
}
