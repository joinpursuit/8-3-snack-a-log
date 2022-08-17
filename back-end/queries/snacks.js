const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const snacks = await db.any("SELECT * FROM snacks");
    return snacks;
  } catch (err) {
    return err;
  }
};

const getSnackByID = async (id) => {
  try {
    const snack = await db.any("SELECT * FROM snacks WHERE id = $1", id);
    return snack;
  } catch (err) {
    return err;
  }
};

const createSnack = async (
  name,
  fiber,
  protein,
  added_sugar,
  is_healthy,
  image
) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (
  id,
  name,
  fiber,
  protein,
  added_sugar,
  is_healthy,
  image
) => {
  try {
    const updateSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 where id=$7 RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image, id]
    );
    return updateSnack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getSnackByID,
  createSnack,
  deleteSnack,
  updateSnack,
};
