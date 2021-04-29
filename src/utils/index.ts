export function getTime() {
  const currentTime = new Date()

  return {
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes()
  }
}

export function getYearDay() {
  const currentDate = new Date()
  const yearStartDate = new Date(currentDate.getFullYear(), 0, 1)

  const yearDayDate = Number(currentDate) - Number(yearStartDate)

  const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000

  const dayOfYear = Math.floor(yearDayDate / ONE_DAY_IN_MILLISECONDS)

  return dayOfYear
}

export function getTimeOfDay(onlyDayOrNight = false) {
  const { hours } = getTime()

  const timeSwitch = () => {
    if (hours >= 5 && hours < 12) return 'morning'
    if (hours >= 12 && hours < 18) return 'afternoon'
    
    return 'night'
  }

  const dayOrNight = () => {
    if (hours >= 5 && hours < 18) return 'day'
    return 'night'
  }

  return onlyDayOrNight ? dayOrNight() : timeSwitch()
}

export function getGeographicCoordinates(): Promise<{
  latitude: number
  longitude: number
}> {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords

      resolve({ latitude, longitude })
    })
  })
}

export function sentenceToTitleCase(sentence: string) {
  return sentence.replace(/\w/, match => match.toUpperCase())
}
