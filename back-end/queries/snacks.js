const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    return await db.any("SELECT * FROM snacks");
  } catch (error) {
    return error;
  }
};

const getSnack = async (id) => {
  try {
    return await db.one("SELECT * FROM snacks WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

const createSnack = async ({
  name,
  fiber,
  protein,
  added_sugar,
  is_healthy,
  image,
}) => {
  try {
    return await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
  } catch (error) {
    return error;
  }
};

const updateSnack = async (
  id,
  { name, fiber, protein, added_sugar, is_healthy, image }
) => {
  try {
    return await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 where id=$7 RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image, id]
    );
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSnacks, getSnack, createSnack, updateSnack };
