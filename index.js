// import Chart from 'https://code.highcharts.com/es-modules/Core/Chart/Chart.js'
// import Highcharts from './highcharts/es-modules/masters/highcharts.src.js'
// import Highcharts from './node_modules/highcharts'
// import Chart from '/highcharts/es-modules/Core/Chart/Chart'
// import ColumnSeries from 'highcharts/es-modules/Series/Column/ColumnSeries'
// import PieSeries from 'highcharts/es-modules/Series/Pie/PieSeries'

import DescriptiveStatistics from './assets/js/options/DescriptiveStatistics.js'

import AgeRang from './assets/js/options/AgeRang.js'
import AgeStage from './assets/js/options/AgeStage.js'

import LesionRang from './assets/js/options/LesionRang.js'
import LesionStage from './assets/js/options/LesionStage.js'

import AgeRangGender from './assets/js/options/GenderAgeRang.js'
import Gender from './assets/js/options/Gender.js'

import DatasetTime from './assets/js/options/DatasetTime.js'
import DatasetStudy from './assets/js/options/DatasetStudy.js'

import { VariantsPie, VariantsMonthly } from './assets/js/options/Variants.js'

function descriptiveChart() {
	const descriptiveStatisticsChart = new Highcharts.Chart('Chart_DescriptiveStatistics', DescriptiveStatistics)
}

function ageChart() {
	const ageRangChart = new Highcharts.Chart('Chart_AgeRang', AgeRang)
	const ageStageChart = new Highcharts.Chart('Chart_AgeStage', AgeStage)
}

function lesionChart() {
	const lesionRangChart = new Highcharts.Chart('Chart_LesionRang', LesionRang)
	const lesionStageChart = new Highcharts.Chart('Chart_LesionStage', LesionStage)
}

function genderChart() {
	const ageRangGenderChart = new Highcharts.Chart('Chart_AgeRangGender', AgeRangGender)
	const genderPieChart = new Highcharts.Chart('Chart_GenderPie', Gender)
}

function dataSetChart() {
	const datasetTimeChart = new Highcharts.Chart('Chart_DatasetTime', DatasetTime)
	const datasetStudyChart = new Highcharts.Chart('Chart_DatasetStudy', DatasetStudy)
}

function variantsChart() {
	const variantsMonthlyChart = new Highcharts.Chart('Chart_VariantsMonthly', VariantsMonthly)
	const variantsChartPie = new Highcharts.Chart('Chart_VariantsPie', VariantsPie)
}

// eslint-disable-next-line prettier/prettier
document.querySelector('#descriptive-tab').addEventListener('click', descriptiveChart)

document.querySelector('#age-tab').addEventListener('click', ageChart)

document.querySelector('#lesion-tab').addEventListener('click', lesionChart)

document.querySelector('#gender-tab').addEventListener('click', genderChart)

document.querySelector('#dataset-tab').addEventListener('click', dataSetChart)

document.querySelector('#variant-tab').addEventListener('click', variantsChart)
