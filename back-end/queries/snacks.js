//import the db object
const db = require("../db/dbConfig.js");
const confirmHealth = require("../confirmHealth");

//return an individual snack with given id
const getOneSnack = async (snackId) => {
  try {
    const returnedSnack = await db.one(
      "SELECT * FROM snacks WHERE id = $1",
      snackId
    );
    return returnedSnack;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//delete an individual snack with given id
const deleteSnack = async (snackId) => {
  try {
    const deletedSnack = db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      snackId
    );
    return deletedSnack;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//get all snacks from the database
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//add snack into the database
const postNewSnack = async (snack) => {
  let { name, fiber, protein, added_sugar, is_healthy, image } = snack;

  //determine if the snack is healthy or not
  const health = confirmHealth({ fiber, protein, added_sugar });
  if (health === true || health === false) {
    is_healthy = health;
  }

  try {
    const newSnack = await db.any(
      "INSERT INTO snacks (name,fiber,protein,added_sugar,is_healthy,image) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
    return newSnack;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//update the snack
const updateTheSnack = async (snack, snackId) => {
  let { name, fiber, protein, added_sugar, is_healthy, image } = snack;

  //determine if the snack is healthy or not
  const health = confirmHealth({ fiber, protein, added_sugar });
  if (health === true || health === false) {
    is_healthy = health;
  }

  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3,added_sugar=$4,is_healthy=$5,image=$6 WHERE id=$7 RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image, snackId]
    );
    return updatedSnack;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getOneSnack,
  deleteSnack,
  getAllSnacks,
  postNewSnack,
  updateTheSnack,
};
