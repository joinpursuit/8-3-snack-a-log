//import db
const db = require("../db/dbConfig");

//check image
const checkImage = (req, res, next) => {
  const { image } = req.body;

  if (!image) {
    req.body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  }

  next();
};

//check snack name
const checkSnackName = (req, res, next) => {
  const { name } = req.body;

  const nameArray = name.split(" ");
  req.body.name = nameArray
    .map((str) => {
      if (str.length > 2) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      } else {
        return str.toLowerCase();
      }
    })
    .join(" ");

  next();
};

//check snackId
// const checkSnackId = async (req, res, next) => {
//   let { snackId } = req.params;
//   snackId = parseInt(snackId);

//   if (isNaN(snackId)) {
//     res.status(404).json({ snackId: -1 });
//   } else {
//     if (snackId < 1 || snackId > 7) {
//       res.status(404).send({ snackId: -1 });
//     } else {
//       next();
//     }
//   }
// };

module.exports = { checkImage, checkSnackName };
