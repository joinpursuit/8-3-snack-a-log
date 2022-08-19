const confirmHealth = (snack) => {

  const { fiber, protein, added_sugar } = snack;


  if (
    fiber == null ||
    protein == null ||
    added_sugar == null ||
    fiber == null ||
    protein == null
  ) {
    return null;
  }

  if ((protein >= 5 || fiber >= 5) && added_sugar <= 5) {
    return true;
  } else if (protein >= 5 && fiber <= 5 && added_sugar <= 5) {
    return true;
  } else if (protein <= 5 && fiber >= 5 && added_sugar <= 5) {
    return true;
  } else {
    return false;
  }
};
module.exports = confirmHealth;
