import Data from '../../data/NourSet.json'
// import Data from '../../data/NourSet'

const AgeRang = {}
const AgeStage = {}
const LesionRang = {}
const LesionStage = {}
const GenderAgeRang = { M: {}, F: {} }
const Gender = { M: 0, F: 0 }

function compute(data) {
	let val = ''
	let gender = ''
	data.filter((ele) => ele.Covid).forEach((element) => {
		val = element.AgeRang
		AgeRang[val] = (AgeRang[val] || 0) + 1

		gender = element.Gender
		GenderAgeRang[gender][val] = (GenderAgeRang[gender][val] ?? 0) + 1
		Gender[gender] += 1

		val = element.AgeStage
		AgeStage[val] = (AgeStage[val] || 0) + 1

		val = element.LesionRang
		LesionRang[val] = (LesionRang[val] || 0) + 1

		val = element.LesionStage
		LesionStage[val] = (LesionStage[val] || 0) + 1
	})
}

// const response = await fetch('../../data/NourSet.json')
// const Data = await response.json()
compute(Data)

// The Asynchronously fetch generate an Error

// fetch('../../data/NourSet.json', {
// 	headers: {
// 		Accept: 'application/json',
// 	},
// 	mode: 'cors',
// })
// 	.then((response) => response.json())
// 	.then(
// 		(data) => {
// 			compute(data)
// 		}
// 		// .filter((ele) => ele.Covid)
// 		// .forEach((element) => {
// 		// 	const range = element.AgeRang
// 		// 	AgeRang[range] = (AgeRang[range] || 0) + 1

// 		// 	const stage = element.AgeStage
// 		// 	AgeStage[stage] = (AgeStage[stage] || 0) + 1
// 		// })
// 	)
// 	.catch((error) => console.error(error))

export { AgeRang, AgeStage, LesionRang, LesionStage, GenderAgeRang, Gender }

// import data from '../../data/NourSet.json' // assert { type: 'json' }

// export const { AgeRang, AgeStage } = data.reduce(
// 	({ AgeRang, AgeStage }, element) => {
// 		if (element.Covid) {
// 			const range = element.AgeRang
// 			AgeRang[range] = (AgeRang[range] || 0) + 1

// 			const stage = element.AgeStage
// 			AgeStage[stage] = (AgeStage[stage] || 0) + 1
// 		}
// 		return { AgeRang, AgeStage }
// 	},
// 	{ AgeRang: {}, AgeStage: {} }
// )
