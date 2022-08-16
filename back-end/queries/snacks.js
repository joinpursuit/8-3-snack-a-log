//import the db object
const db = require("../db/dbConfig.js");

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

module.exports = { getOneSnack, deleteSnack };
