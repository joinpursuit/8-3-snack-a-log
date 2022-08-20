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

const getOneSnack = async (id) => {
  try {
    const oneSnack = await db.any("SELECT * FROM snacks WHERE id = $1", id);
    return oneSnack;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const snack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return snack;
  } catch (err) {
    console.log(err.message || err);
    return err;
  }
};

module.exports = { getSnacks, getOneSnack, createSnack, deleteSnack };
