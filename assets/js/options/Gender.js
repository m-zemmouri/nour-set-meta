import { Gender as data } from '../groupData'
import { Gender as colors } from '../colors'
import { Gender as categories } from '../categories'

const seriesData = categories.map((gender) => ({
	name: gender === 'M' ? 'Male' : 'Female',
	color: colors[gender],
	y: data[gender] || null,
}))

const Gender = {
	chart: {
		// renderTo: 'Chart_Gender_B',
		type: 'pie',
	},
	title: {
		text: 'Gender distribution (B)',
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
			name: 'Gender',
			colorByPoint: true,
			data: seriesData,
		},
	],
}
export default Gender
