const db = require("../db/dbConfig.js");

const getSnacks = async () => {
  try {
    const snacks = await db.any("SELECT * FROM snacks");
    return snacks;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createSnack = async (snack) => {
  try {
    const newSnack = await db.any(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
        snack.image,
      ]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};
module.exports = { getSnacks, createSnack };
