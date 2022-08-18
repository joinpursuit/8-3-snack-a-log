const confirmHealth = (snack) =>
  typeof snack.protein !== "number" &&
  typeof snack.fiber !== "number" &&
  typeof snack.added_sugar !== "number"
    ? null
    : snack.fiber >= 5 && snack.added_sugar < 5
    ? true
    : snack.protein >= 5 && snack.added_sugar < 5;

module.exports = confirmHealth;
