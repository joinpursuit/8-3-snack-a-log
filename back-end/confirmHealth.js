const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;

  if (protein === null || fiber === null || added_sugar === null) {
    return null;
  }

  if ((protein >= 5 || fiber >= 5) && added_sugar <= 5) {
    return true;
  } else if (protein >= 5 && fiber <= 5 && added_sugar <= 5) {
    return true;
  } else if (protein <= 5 && fiber >= 5 && added_sugar <= 5) {
    return true;
  }
  return false;
};

module.exports = confirmHealth;
