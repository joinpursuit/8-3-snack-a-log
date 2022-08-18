const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    return await db.any("SELECT * FROM snacks");
  } catch (error) {
    return error;
  }
};

const getSingleSnack = async (id) => {
  try {
    return await db.one("SELECT * FROM snacks WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    return await db.one("DELETE FROM snacks WHERE id=$1 RETURNING *", id);
  } catch (error) {
    return error;
  }
};

const createSnack = async (snack) => {
  try {
    return await db.one(
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
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getSingleSnack,
  deleteSnack,
  createSnack,
};
