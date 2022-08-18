const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;
  if (fiber === NaN || protein === NaN || added_sugar === NaN) {
    return null;
  } else if (fiber === null || protein === null || added_sugar === null) {
    return null;
  } else if (added_sugar > 5) {
    return false;
  } else if (fiber >= 5 || protein >= 5) {
    return true;
  }
  return false;
};

module.exports = confirmHealth;
