const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const { is_healthy } = req.body;
  console.log(is_healthy);
  if (
    is_healthy ||
    is_healthy === "true" ||
    is_healthy === "false" ||
    is_healthy === undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_healthy must be a boolean value" });
  }
};

module.exports = {
  checkName,
  checkBoolean,
};
