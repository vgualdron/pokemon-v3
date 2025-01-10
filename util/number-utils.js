export const generateRandom = function (a, b) {
  return Math.round(Math.random()*(b-a)+parseInt(a))
}


export default {
  generateRandom
}
