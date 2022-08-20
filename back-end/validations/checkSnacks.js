const { reset } = require("nodemon");

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (name) {
    next();
  } else {
    res
      .status(400)
      .json({ success: false, payload: "checkName validation failed" });
  }
};

function nameFormatter(name) {
  let lowerCaseName = name.split(" ");
  let emptyArray = [];
  for (let i = 0; i < lowerCaseName.length; i++) {
    if (lowerCaseName[i].length > 2) {
      emptyArray.push(
        lowerCaseName[i].charAt(0).toUpperCase() +
          lowerCaseName[i].slice(1).toLowerCase()
      );
    } else emptyArray.push(lowerCaseName[i].toLowerCase());
  }
  return emptyArray.join(" ");
}

module.exports = {
  checkName,
  nameFormatter,
};
