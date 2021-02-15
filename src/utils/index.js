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

	const oneDayInMilliseconds =  24 * 60 * 60 * 1000

	const dayOfYear = Math.floor(yearDayDate / oneDayInMilliseconds)

	return dayOfYear
}