import { LesionStage as data } from '../groupData'
import { LesionStage as colors } from '../colors'
import { LesionStage as categories } from '../categories'

const seriesData = categories.map((category) => ({
	name: category,
	y: data[category] || null,
	color: colors[category],
}))

const LesionStage = {
	chart: {
		type: 'pie',
	},
	title: {
		text: 'Lesion Rate distribution (B)',
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
				enabled: true,
				format: '<b>{point.percentage:.1f} %</b>',
				style: { fontWeight: 'bold', fontSize: '15px' },
				color: 'black',
			},
			showInLegend: true,
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
export default LesionStage
