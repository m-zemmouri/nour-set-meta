/* eslint-disable no-new */
/* eslint-disable no-undef */
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

document.getElementById('descriptiveTab').addEventListener('click', () => new Highcharts.Chart('Chart_DescriptiveStatistics', DescriptiveStatistics))

document.getElementById('ageTab').addEventListener('click', () => {
	new Highcharts.Chart('Chart_AgeRang', AgeRang)
	new Highcharts.Chart('Chart_AgeStage', AgeStage)
})

document.getElementById('lesionTab').addEventListener('click', () => {
	new Highcharts.Chart('Chart_LesionRang', LesionRang)
	new Highcharts.Chart('Chart_LesionStage', LesionStage)
})

document.getElementById('genderTab').addEventListener('click', () => {
	new Highcharts.Chart('Chart_AgeRangGender', AgeRangGender)
	new Highcharts.Chart('Chart_GenderPie', Gender)
})

document.getElementById('datasetTab').addEventListener('click', () => {
	new Highcharts.Chart('Chart_DatasetTime', DatasetTime)
	new Highcharts.Chart('Chart_DatasetStudy', DatasetStudy)
})

document.getElementById('variantTab').addEventListener('click', () => {
	new Highcharts.Chart('Chart_VariantsMonthly', VariantsMonthly)
	new Highcharts.Chart('Chart_VariantsPie', VariantsPie)
})

document.getElementById('onlyCovid').addEventListener('change', (event) => {
	const filter = {}
	if (event.target.checked) filter.Covid = true
	$('#table').bootstrapTable('filterBy', filter)
})

$('table').bootstrapTable({ data: Data })
