import { LesionRang as data } from '../groupData.js'
import { LesionRang as colors } from '../colors.js'
import { LesionRang as categories } from '../categories.js'

const seriesData = categories.map((category) => ({
	name: category,
	y: data[category] || 0,
	color: colors[category],
}))

const LesionRang = {
	chart: {
		type: 'column',
	},
	title: {
		text: 'Lesion Rate distribution (A)',
		style: { fontWeight: 'bold', fontSize: '20px' },
	},
	accessibility: {
		announceNewData: {
			enabled: true,
		},
	},
	xAxis: {
		type: 'category',
		title: {
			text: 'Lesion Rate',
			style: { fontWeight: 'bold', fontSize: '15px' },
		},
		// categories: categories,
		labels: {
			format: '{text} %',
			style: { fontWeight: 'bold' },
		},
	},
	yAxis: {
		title: {
			text: 'Cases Number',
			style: { fontWeight: 'bold', fontSize: '15px' },
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

	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b> patients<br/>',
	},
	series: [
		{
			name: 'Datasets',
			type: 'column',
			colorByPoint: true,
			data: seriesData,
		},
		{
			name: 'Datasets',
			type: 'spline',
			color: '#0077B6',
			data: seriesData,
		},
	],
}

export default LesionRang
