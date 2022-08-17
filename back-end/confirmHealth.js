const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;

  if (
    fiber === null ||
    fiber === "" ||
    protein === null ||
    protein === "" ||
    added_sugar === null ||
    added_sugar === ""
  ) {
    return null;
  }

  if ((fiber >= 5 || protein >= 5) && added_sugar <= 5) {
    return true;
  } else {
    return false;
  }
};

module.exports = confirmHealth;
