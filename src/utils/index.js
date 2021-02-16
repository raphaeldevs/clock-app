export function getTime() {
  return {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
  }
}

export function getYearDay() {
  const currentDate = new Date()
  const yearStartDate = new Date(currentDate.getFullYear(), 0, 0)

  const yearDayDate = currentDate - yearStartDate

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000

  const dayOfYear = Math.floor(yearDayDate / oneDayInMilliseconds)

  return dayOfYear
}

export function getTimeOfDay(onlyDayOrNight) {
  const { hours } = getTime()

  const timeSwitch = () => {
    if (hours >= 5 && hours < 12) return 'morning'
    if (hours >= 12 && hours < 18) return 'afternoon'
    if (hours >= 18 || hours < 5) return 'night'
  }

  const dayOrNight = () => {
    if (hours >= 5 && hours < 18) return 'day'
    if (hours >= 18 || hours < 5) return 'night'
  }

  return onlyDayOrNight ? dayOrNight() : timeSwitch()
}

export function getGeographicCoordinates() {
  return new Promise(resolve => {
  	navigator.geolocation.getCurrentPosition(position => {
	    const { latitude, longitude } = position.coords

	    resolve({ latitude, longitude })
		})
  })
}
