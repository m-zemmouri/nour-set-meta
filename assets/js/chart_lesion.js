var data = []

function get_Chart_Lesion() {
	var myData = data
	get_Chart_Lesion_A(myData)
	get_Chart_Lesion_B(myData)
}

function get_Chart_Lesion_A() {
	var MyOptions = {
		chart: {
			renderTo: 'Chart_Lesion_A',
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
			labels: { style: { fontWeight: 'bold' } },
			title: {
				text: 'Lesion Rate',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			// categories: ['Beginning', '01 - 09', '10 - 19', '20 - 29', '30 - 39', '40 - 49', '50 - 59', '60 - 69', '70 - 79', '80 - 89', '90 - 100']
		},
		yAxis: {
			title: {
				text: 'Cases Number',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
		},
		credits: {
			text: ' ',
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
				data: [
					{ name: '01 - 10 %', y: 344, color: '#ADE8F4' },
					{ name: '11 - 20 %', y: 226, color: '#90E0EF' },
					{ name: '21 - 30 %', y: 209, color: '#48CAE4' },
					{ name: '31 - 40 %', y: 28, color: '#00B4D8' },
					{ name: '41 - 50 %', y: 207, color: '#0096C7' },
					{ name: '51 - 60 %', y: 36, color: '#0077B6' },
					{ name: '61 - 70 %', y: 32, color: '#023E8A' },
					{ name: '71 - 80 %', y: 56, color: '#03045E' },
					{ name: '81 - 90 %', y: 7, color: '#030455' },
					{ name: '91 - 100 %', y: 4, color: '#03044D' },
				],
			},
			{
				name: 'Datasets',
				type: 'spline',
				color: '#0077B6',
				data: [
					{ name: '01 - 10 %', y: 344 },
					{ name: '11 - 20 %', y: 226 },
					{ name: '21 - 30 %', y: 209 },
					{ name: '31 - 40 %', y: 28 },
					{ name: '41 - 50 %', y: 207 },
					{ name: '51 - 60 %', y: 36 },
					{ name: '61 - 70 %', y: 32 },
					{ name: '71 - 80 %', y: 56 },
					{ name: '81 - 90 %', y: 7 },
					{ name: '91 - 100 %', y: 4 },
				],
			},
		],
	}
	var chart = new Highcharts.Chart(MyOptions)
}

function get_Chart_Lesion_B() {
	var MyOptions = {
		chart: {
			renderTo: 'Chart_Lesion_B',
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
		// xAxis: {
		//     type: 'category',
		//     labels: { style: { fontWeight: 'bold' } }
		//     // title: {
		//     //     text: 'Dataset',
		//     //     style: { fontWeight: 'bold', fontSize: '12px' }
		//     // }
		// },
		// yAxis: [{
		//     // Slice yAxis
		//     title: {
		//         text: 'Slice Number',
		//         // style: {
		//         //     color: Highcharts.getOptions().colors[2]
		//         // }
		//     },

		// },
		// {
		//     // Size yAxis
		//     labels: {
		//         format: '{value:,.0f} Gb',
		//     },
		//     title: {
		//         text: 'Size of Storage',
		//         // style: {
		//         //     color: Highcharts.getOptions().colors[0]
		//         // }
		//     },
		//     opposite: true
		//     // labels: {
		//     //     format: '{value} mm',
		//     //     style: {
		//     //         color: Highcharts.getOptions().colors[0]
		//     //     }
		//     // }

		// },],
		credits: {
			text: ' ',
		},
		legend: {
			enabled: true,
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					// distance: -60,
					enabled: true,
					//format: '<b>{point.name} :<br>{point.y} cases<br>{point.percentage:.1f} %</b>',
					format: '<b>{point.percentage:.1f} %</b>',
					style: { fontWeight: 'bold', fontSize: '15px' },
					color: 'black',
				},
				showInLegend: true,
			},
		},

		// tooltip: {
		//     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		//     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b><br/>'
		// },

		series: [
			{
				name: 'Age Stage',
				colorByPoint: true,
				data: [
					{ name: '01-25 %', y: 675, color: '#90E0EF' },
					{ name: '26-50 %', y: 339, color: '#00B4D8' },
					{ name: '51-75 %', y: 112, color: '#0077B6' },
					{ name: '76-100 %', y: 23, color: '#03045E' },
				],
			},
		],
	}

	var chart = new Highcharts.Chart(MyOptions)
}
