import Data from './data/NourSet.json'

import DescriptiveStatistics from './assets/js/options/DescriptiveStatistics'

import AgeRang from './assets/js/options/AgeRang'
import AgeStage from './assets/js/options/AgeStage'

import LesionRang from './assets/js/options/LesionRang'
import LesionStage from './assets/js/options/LesionStage'

import AgeRangGender from './assets/js/options/GenderAgeRang'
import Gender from './assets/js/options/Gender'

import DatasetTime from './assets/js/options/DatasetTime'
import DatasetStudy from './assets/js/options/DatasetStudy'

import { VariantsPie, VariantsMonthly } from './assets/js/options/Variants'

descriptiveTab.addEventListener('click', () => {
	const descriptiveStatisticsChart = new Highcharts.Chart('Chart_DescriptiveStatistics', DescriptiveStatistics)
})

ageTab.addEventListener('click', () => {
	const ageRangChart = new Highcharts.Chart('Chart_AgeRang', AgeRang)
	const ageStageChart = new Highcharts.Chart('Chart_AgeStage', AgeStage)
})

lesionTab.addEventListener('click', () => {
	const lesionRangChart = new Highcharts.Chart('Chart_LesionRang', LesionRang)
	const lesionStageChart = new Highcharts.Chart('Chart_LesionStage', LesionStage)
})

genderTab.addEventListener('click', () => {
	const ageRangGenderChart = new Highcharts.Chart('Chart_AgeRangGender', AgeRangGender)
	const genderPieChart = new Highcharts.Chart('Chart_GenderPie', Gender)
})

datasetTab.addEventListener('click', () => {
	const datasetTimeChart = new Highcharts.Chart('Chart_DatasetTime', DatasetTime)
	const datasetStudyChart = new Highcharts.Chart('Chart_DatasetStudy', DatasetStudy)
})

variantTab.addEventListener('click', () => {
	const variantsMonthlyChart = new Highcharts.Chart('Chart_VariantsMonthly', VariantsMonthly)
	const variantsChartPie = new Highcharts.Chart('Chart_VariantsPie', VariantsPie)
})

onlyCovid.addEventListener('change', () => {
	const filter = {}
	if (onlyCovid.checked) filter.Covid = true
	$('#table').bootstrapTable('filterBy', filter)
})

$('table').bootstrapTable({ data: Data })
