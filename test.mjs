export default function daysToXmas (date) {
	const dayNo = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))

	return dayNo > (date.getFullYear() % 4 === 0 ? 183 : 182)
		? Math.ceil((new Date(date.getFullYear(), 11, 25) - date) / 86400000)
		: Math.ceil(((new Date(date.getFullYear(), 0, 1) - date) / 86400000)) - 7
}

const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5

const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0
const date5 = new Date('Dec 26, 2021')
daysToXmas(date5) // -1
const date6 = new Date('Dec 31, 2021')
daysToXmas(date6) // -6
const date7 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date7) // -7
const date8 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date8) // -7