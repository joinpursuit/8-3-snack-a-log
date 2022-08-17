const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;

  if (
    fiber === undefined ||
    fiber === '' ||
    protein === undefined ||
    protein === '' ||
    added_sugar === undefined ||
    added_sugar === ''
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
