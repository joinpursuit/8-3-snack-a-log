const checkValues = (req, res, next) => {
  if (
    (req.body.name,
    req.body.fiber,
    req.body.protein,
    req.body.added_sugar,
    req.body.image)
  ) {
    next();
  } else {
    res.status(400).json({
      error:
        "You are missing required keys. Please make sure you have: name, fiber, protein, added_sugar, is_healthy and image along with their appropriate values.",
    });
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
  checkValues,
  checkBoolean,
};
