const checkValues = (req, res, next) => {
  if (
    (req.body.name &&
      req.body.fiber &&
      req.body.protein &&
      req.body.added_sugar) ||
    req.body.added_sugar === 0
  ) {
    if (req.body.image === '' || req.body.image === undefined) {
      req.body.image = '../images/defaultImage.jpeg';
    }
    next();
  } else {
    res.status(400).json({
      error:
        'You are missing required keys. Please make sure you have: name, fiber, protein, added_sugar, is_healthy and image along with their appropriate values.',
    });
  }
};

const checkBoolean = (req, res, next) => {
  const { is_healthy } = req.body;
  //console.log(is_healthy);
  if (is_healthy == true || is_healthy == false || is_healthy == undefined) {
    next();
  } else {
    res.status(400).json({ error: 'is_healthy must be a boolean value' });
  }
};

const capitalizeName = (name) => {
  let arr = name.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(' ');
};

module.exports = {
  checkValues,
  checkBoolean,
  capitalizeName,
};
