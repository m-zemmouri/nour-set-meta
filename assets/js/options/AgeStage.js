import { AgeStage as data } from '../groupData'
import { AgeStage as colors } from '../colors'
import { AgeStage as categories } from '../categories'

const seriesData = categories.map((category) => ({
	name: category,
	color: colors[category],
	y: data[category] || null,
}))

const AgeStage = {
	chart: {
		// renderTo: 'Chart_Age_B',
		type: 'pie',
	},
	title: {
		text: 'Age distribution (B)',
		style: { fontWeight: 'bold', fontSize: '20px' },
	},
	accessibility: {
		announceNewData: {
			enabled: true,
		},
	},
	credits: {
		text: 'm-zemmouri',
		href: 'https://github.com/m-zemmouri/nour-set-meta',
	},
	legend: {
		enabled: true,
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				distance: -60,
				enabled: true,
				format: '<b>{point.name} :<br>{point.y} cases<br>{point.percentage:.1f} %</b>',
				style: { fontWeight: 'bold', fontSize: '15px' },
				color: 'black',
			},
		},
	},
	series: [
		{
			name: 'Age Stage',
			colorByPoint: true,
			data: seriesData,
		},
	],
}

export default AgeStage
