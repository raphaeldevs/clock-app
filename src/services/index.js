import { getGeographicCoordinates } from '../utils'

export async function getClimate() {
  const { REACT_APP_OWM_API_KEY: API_KEY } = process.env

  const { latitude, longitude } = await getGeographicCoordinates()

  const apiRequest = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  )

  const apiResponse = await apiRequest.json()

  const {
    main: { temp },
    weather: [{ icon }]
  } = apiResponse

  return {
    temperature: parseInt(temp),
    iconCode: icon.replace(/[^0-9]/g, '')
  }
}

export async function getRandomImage() {
  const { REACT_APP_UNSPLASH_API_KEY: API_KEY } = process.env

  const apiRequest = await fetch(
    `https://api.unsplash.com/photos/random?orientation=landscape&client_id=${API_KEY}`
  )

  const apiResponse = await apiRequest.json()

  const {
    urls: { full: imageUrl },
    alt_description: altDescription
  } = apiResponse

  return {
    imageUrl,
    altDescription
  }
}
