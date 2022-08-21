//const db = require('../db/dbConfig');

const changImageUrl = (req, res, next) => {
  const { image } = req.body;
  if (!image) {
    req.body.image =
      'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image';
  }
  next();
};

const capitalizeSnackName = (req, res, next) => {
  const { name } = req.body;
  let snackName = name.split(' ');

  req.body.name = snackName
    .map((eachWord) => {
      return eachWord.length > 2
        ? eachWord.charAt(0).toUpperCase() + eachWord.slice(1).toLowerCase()
        : eachWord.toLowerCase();
    })
    .join(' ');
  next();
};

module.exports = {
  changImageUrl,
  capitalizeSnackName,
};
