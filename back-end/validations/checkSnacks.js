const { reset } = require("nodemon");

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (name !== null) {
    next();
  } else {
    res
      .status(400)
      .json({ success: false, payload: "checkName validation failed" });
  }
};

const checkImage = (req, res, next) => {
  const { image } = req.body;
  if (image !== "" || image !== undefined || image !== null) {
    next();
  } else {
    res
      .status(400)
      .json({ success: false, payload: "checkImage validation failed" });
  }
};

// const nameFormatter = (name) => {

// }

module.exports = {
  checkName,
  checkImage,
};
