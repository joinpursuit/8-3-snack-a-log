const capitalize = (snack) => {
  if (!snack.image) {
    snack.image =
      'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image';
  }
  const words = snack.name.split(' ');

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

module.exports = checkCapitalize



//import db
//checking this

// const db = require('../db/dbConfig');

// const checkName = (req, res, next) => {
//   if (req.body.name) {
//     next();
//   } else {
//     res.status(400).json({ error: 'Name is required' });
//   }
// };

// // const checkBoolean = (req, res, next) => {
// //   const { is_healthy } = req.body;
// //   if (is_healthy == true || is_healthy == false || is_healthy == undefined) {
// //     next();
// //   } else {
// //     res.status(400).json({ error: 'is_healthy must be a boolean value' });
// //   }
// //  };

// // const checkForNoAdditionalParams = (req, res, next) => {
// //   const {
// //     name,
// //     fiber,
// //     protein,
// //     added_sugar,
// //     is_healthy,
// //     image,
// //     id,
// //     ...otherStuff
// //   } = req.body;
// //   if (
// //     otherStuff &&
// //     Object.keys(otherStuff).length === 0 &&
// //     Object.getPrototypeOf(otherStuff) === Object.prototype
// //   ) {
// //     next();
// //   } else {
// //     res.status(400).send({ error: "no additional parameters allowed" });
// //   }
// // };

// const checkImage = (req, res, next) => {
//   const { image } = req.body;

//   if (!image) {
//     req.body.image =
//       "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
//   }

//   next();
// };

// const checkStr = (req, res, next) => {
//   const {name}=req.body
//   const words = name.split(" ");
//   req.body.name = words
//     .map((word) => {
//     if (words.length > 2) {
//       return words[0].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
//     }else{
//       words.toLowerCase()
//     }
 
//   }).join(' ')
// next();
// }
// module.exports = {
//    checkName,
//   // checkBoolean,
//   checkImage,
//   //  checkForNoAdditionalParams,
//    checkStr
// };;
