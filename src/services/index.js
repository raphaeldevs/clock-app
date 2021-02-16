export async function getClimate() {
	const { REACT_APP_OWM_API_KEY } = process.env
	
	const apiRequest = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=3388368&units=metric&appid=${REACT_APP_OWM_API_KEY}`)
	const apiResponse = await apiRequest.json()

	const { main: { temp }, weather: [{ icon }] } = apiResponse

	return { 
		temperature: temp, 
		iconCode: icon.replace(/[^0-9]/g, '')
	}
}