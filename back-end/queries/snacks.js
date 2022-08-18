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

const editSnack = async (
  id,
  { protein, fiber, added_sugar, name, image, is_healthy }
) => {
  try {
    const updateSnack = await db.one(
      "UPDATE snacks SET name=$1, image=$2, fiber=$3, added_sugar=$4, protein=$5, is_healthy=$6 WHERE id=$7 RETURNING *",
      [name, image, fiber, added_sugar, protein, is_healthy, id]
    );
    return updateSnack;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getSnacks,
  getOneSnack,
  createSnack,
  deleteSnack,
  editSnack,
};
