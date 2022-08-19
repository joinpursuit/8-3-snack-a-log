const checkName = (req, res, next) => {
    if (req.body.name) {
      console.log('name is ok')
      next()
    } else {
      res.status(400).json({ error: 'Name is required' })
    }
  }
  
  const checkBoolean = (req, res, next) => {
    const { is_healthy } = req.body
    if (is_healthy == true || is_healthy == false || is_healthy == undefined) {
      next()
    } else {
      res.status(400).json({ error: 'is_healthy must be a boolean value' })
    }
  }
  
  const checkForNoAdditionalParams = (req, res, next) => {
    const {
      name,
      protein,
      fiber,
      is_healthy,
      added_sugar,
      image,
      id,
      ...otherStuff
    } = req.body
    if (
      otherStuff &&
      Object.keys(otherStuff).length === 0 &&
      Object.getPrototypeOf(otherStuff) === Object.prototype
    ) {
      next()
    } else {
      res.status(400).send({ error: 'no additional parameters allowed' })
    }
  }
  
  module.exports = {
    checkName,
    checkBoolean,
    checkForNoAdditionalParams,
  }