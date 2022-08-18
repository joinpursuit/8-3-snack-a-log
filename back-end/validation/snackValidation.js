const checkValues = (req, res, next) => {
  if (req.body.name) {
    if (
      req.body.image === "" ||
      req.body.image === undefined ||
      req.body.image === null
    ) {
      req.body.image =
        "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    if (
      req.body.fiber === "" ||
      req.body.fiber === undefined ||
      req.body.fiber === null
    ) {
      req.body.fiber = 0;
    }
    if (
      req.body.protein === "" ||
      req.body.protein === undefined ||
      req.body.protein === null
    ) {
      req.body.protein = 0;
    }
    if (
      req.body.added_sugar === "" ||
      req.body.added_sugar === undefined ||
      req.body.added_sugar === null
    ) {
      req.body.added_sugar = 0;
    }
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

  if (is_healthy == true || is_healthy == false || is_healthy == undefined) {
    next();
  } else {
    res.status(400).json({ error: "is_healthy must be a boolean value" });
  }
};

const capitalizeName = (name) => {
  let arr = name.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(" ");
};

module.exports = {
  checkValues,
  checkBoolean,
  capitalizeName,
};
