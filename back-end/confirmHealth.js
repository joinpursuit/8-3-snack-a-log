const confirmHealth = (snack) => {
  const { fiber, added_sugar, protein } = snack;
  if (protein === null || added_sugar === null || fiber === null) {
    return null;
  }

  if (added_sugar <= 5) {
    if (protein >= 5 || fiber >= 5) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

module.exports = confirmHealth;
