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

module.exports = {
  getAllSnacks,
  getSingleSnack,
};
