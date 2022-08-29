const capitalize = (name) => {
    const result = name
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return word.length <= 2 ? word : word[0].toUpperCase() + word.slice(1)
      })
      .join(' ')
    return result
  }
  
  const isHealthy = (fiber, protein, addedSugar) => {
    const result = protein > 5 || (fiber > 5 && addedSugar < 5) ? true : false
  
    return protein && fiber && addedSugar ? result : null
  }
  
  module.exports = {
    capitalize,
    isHealthy,
  }