const { reset } = require("nodemon");

//If only given a name, I need to post with default stock image url with it
//if name and image are true, then I need to post the given name and url

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
      .json({ success: false, payload: "checkName validation failed" });
  }
};

module.exports = {
  checkName,
  checkImage,
};
