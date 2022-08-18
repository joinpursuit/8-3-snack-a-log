const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getSnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const oneSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return oneSnack;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createSnack = async ({
  name,
  image,
}) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, image) VALUES($1, $2) RETURNING *",
      [name, image]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSnacks, getSnack, deleteSnack, createSnack };
