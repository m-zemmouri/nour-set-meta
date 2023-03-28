import { GenderAgeRang as data } from '../groupData'
import { Gender as colors } from '../colors'
import { AgeRang as categories, Gender } from '../categories'

const seriesData = Gender.map((gender) => ({
	name: gender === 'M' ? 'Male' : 'Female',
	color: colors[gender],
	data: categories.map((category) => ({
		name: category,
		y: gender === 'M' ? -data[gender][category] || 0 : data[gender][category] || 0, // Female values by negative
	})),
}))

const GenderAgeRang = {
	chart: {
		// renderTo: 'Chart_Gender_A',
		type: 'bar',
	},
	title: {
		text: 'Gender distribution (A)',
		style: { fontWeight: 'bold', fontSize: '20px' },
	},
	xAxis: [
		{
			title: {
				text: 'Patients Age',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			categories: categories,
			labels: {
				format: '{text} Year',
				style: { fontWeight: 'bold' },
			},
		},
	],
	yAxis: {
		title: {
			text: 'Cases Number',
			style: { fontWeight: 'bold', fontSize: '15px' },
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value)
			},
		},
	},
	credits: {
		text: 'm-zemmouri',
		href: 'https://github.com/m-zemmouri/nour-set-meta',
	},
	plotOptions: {
		series: {
			stacking: 'normal',
			dataLabels: {
				enabled: true,
				formatter: function () {
					return Math.abs(this.y)
				},
				color: 'black',
			},
		},
	},
	series: seriesData,
}

export default GenderAgeRang
