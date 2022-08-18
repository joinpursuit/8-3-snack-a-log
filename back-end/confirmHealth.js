const confirmHealth = (snack) => {
  console.log(snack);

  

  if (isNaN(snack.fiber)) {
   snack.fiber=0
  }
  if (isNaN(snack.protein)) {
    snack.protein=0
  }
  if (isNaN(snack.added_sugar)) {
    snack.added_sugar=0
  }

   if (snack.fiber >= 5 && snack.added_sugar < 5) return true;

   if (snack.protein >= 5 && snack.added_sugar < 5) return true;

  if (snack.protein >= 5 && snack.fiber >= 5 && snack.added_sugar < 5) return true;

    return false;
  
};

module.exports = confirmHealth;
