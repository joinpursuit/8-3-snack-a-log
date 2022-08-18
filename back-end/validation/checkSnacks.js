//import db
const db = require('../db/dbConfig');

// const checkName = (req, res, next) => {
//     if (req.body.name) {
//       next();
//     } else {
//       res.status(400).json({ error: 'Name is required' });
//     }
//   };

const checkImage = (req, res, next) => {
  const { image } = req.body;

  if (!image) {
    req.body.image =
      'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image';
  }

  next();
};
const checkCapitalization = (snack) => {
  const { name } = req.body;
  const words = name.split(' ');

  const capitalizeStr = words
    .map((word) => {
      if (word.length > 2) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    })
    .join(' ');

  return capitalizeStr;
};

module.exports = {
  // checkName,
  checkImage,
  checkCapitalization,
};
