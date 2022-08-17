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

module.exports = { getSnacks };
