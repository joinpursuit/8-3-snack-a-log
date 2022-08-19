const confirmHealth = (snack) => {
  console.log(snack);

  if (isNaN(snack.fiber)) {
    snack.fiber = -1;
  }
  if (isNaN(snack.protein)) {
    snack.protein = -1;
  }
  if (isNaN(snack.added_sugar)) {
    snack.added_sugar = -1;
  }
  
  if (snack.fiber < 0 || snack.protein < 0 || snack.added_sugar < 0) {
    return null;
  }

  if ((snack.protein >= 5 || snack.fiber >= 5) && snack.added_sugar < 5)
    return true;

  //  if (snack.fiber >= 5 && snack.added_sugar < 5) return true;

  //  if (snack.protein >= 5 && snack.added_sugar < 5) return true;

  return false;
};

module.exports = confirmHealth;
