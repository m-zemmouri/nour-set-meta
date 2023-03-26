import { AgeRang as data } from '../groupData.js'
import { AgeRang as colors } from '../colors.js'
import { AgeRang as categories } from '../categories.js'

const seriesData = categories.map((category) => ({
	name: category,
	color: colors[category],
	y: data[category] || 0,
}))

const AgeRang = {
	chart: {
		// renderTo: 'Chart_Age_A',
		type: 'column',
	},
	title: {
		text: 'Age distribution (A)',
		style: { fontWeight: 'bold', fontSize: '20px' },
	},
	accessibility: {
		announceNewData: {
			enabled: true,
		},
	},
	xAxis: {
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
	legend: {
		enabled: false,
	},
	plotOptions: {
		series: {
			borderWidth: 0,
			dataLabels: {
				enabled: true,
				format: '{point.y:,.0f}',
			},
		},
	},
	series: [
		{
			name: 'Age',
			type: 'column',
			colorByPoint: true,
			data: seriesData,
		},
		{
			name: 'Age',
			type: 'spline',
			color: '#52B788',
			data: seriesData,
		},
	],
}

export default AgeRang
