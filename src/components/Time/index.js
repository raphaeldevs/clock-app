import { useState } from 'react'

import { TimeView } from './styles'

import { getTime } from '../../utils'

export default function Time() {
	const [time, setTime] = useState(getTime())

	const getFormattedTime = () => {
	  const { hours, minutes } = time

	  const formattedHours = hours < 10 
			? `0${hours}`
			: hours

		const formattedMinutes = minutes < 10 
			? `0${minutes}`
			: minutes

	  return `${formattedHours}:${formattedMinutes}`
	}

	setInterval(() => {
		setTime(getTime())
	}, 1000)

	return (
  	<TimeView>{ getFormattedTime() }</TimeView>
	)
}