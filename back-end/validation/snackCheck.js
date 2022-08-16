//import db
const db = require("../db/dbConfig");

//get

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

// module.exports = { checkSnackId };
