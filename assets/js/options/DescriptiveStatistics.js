const seriesData = [
	{
		name: 'Lesion',
		low: 1,
		high: 99,
		median: 25,
		q1: 10,
		q3: 40,
		color: '#0077B6',
		fillColor: '#00B4D8',
	},
	{
		name: 'Age',
		low: 19,
		high: 100,
		median: 57,
		q1: 44,
		q3: 69,
		color: '#1B4332',
		fillColor: '#95D5B2',
	},
]

const DescriptiveStatistics = {
	chart: {
		//  renderTo: 'Descriptive_Statistics',
		type: 'boxplot',
	},
	title: {
		text: 'Descriptive Statistics',
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
		enabled: false,
	},
	xAxis: {
		categories: ['Lesion', 'Age'],
		labels: { style: { fontWeight: 'bold', fontSize: '15px' } },
	},

	yAxis: [
		{
			title: {
				text: 'Lesion Rate',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			labels: {
				formatter: function () {
					return `${this.value} %`
				},
			},
			max: 105,
			min: 0,
			startOnTick: false,
			endOnTick: false,
		},
		{
			title: {
				text: 'Age (Year)',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			labels: {
				formatter: function () {
					return `${this.value} Y`
				},
			},
			max: 105,
			min: 0,
			startOnTick: false,
			endOnTick: false,
			opposite: true,
		},
	],
	plotOptions: {
		boxplot: {
			lineWidth: 2,
			stemDashStyle: 'dot',
			stemWidth: 2,
		},
	},
	series: [
		{
			data: seriesData,
		},
	],
}

export default DescriptiveStatistics
