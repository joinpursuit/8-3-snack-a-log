const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;

  if (isNaN(fiber) || isNaN(protein) || isNaN(added_sugar)) {
    return null;
  }

  if ((fiber >= 5 || protein >= 5) && added_sugar <= 5) {
    return true;
  } else {
    return false;
  }
};

module.exports = confirmHealth;
