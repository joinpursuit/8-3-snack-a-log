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

const getOneSnack = async (id) => {
  try {
    const oneSnack = await db.any("SELECT * FROM snacks WHERE id = $1", id);
return oneSnack;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = { getSnacks, getOneSnack };
