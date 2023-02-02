import './style.css'

const randomNumGenerator = (numberFrom: number = 1, numberTo: number = 10): number => {
  const rangedNum = Math.abs(numberFrom - numberTo)
  const numInRange = Math.round(Math.random() * rangedNum)
  const minNum = Math.min(numberFrom, numberTo)
  return numInRange + minNum
}

const getRandomNumber = new Promise((resolve, reject) => {
  const randomNumber = randomNumGenerator()

  setTimeout(() => {
    randomNumber < 5 ? resolve(randomNumber) : reject(randomNumber)
  }, randomNumber * 1000)

})

getRandomNumber
  .then(number => console.log(`response received after ${number} sec`))
  .catch(error => console.error(`response received after ${error} sec`))

// const getRandomNumberWithDelay: Promise<number> = new Promise((resolve, reject) => {
//   const randomNumber = Math.round(Math.random() * 10)
//
//   setTimeout(() => {
//     randomNumber < 6 ? resolve(randomNumber) : reject(randomNumber)
//   }, randomNumber * 1000)
// })
//
// getRandomNumberWithDelay
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.error(error)
//   })
