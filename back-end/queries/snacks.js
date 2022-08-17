const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    return await db.any("SELECT * FROM snacks");
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
};
