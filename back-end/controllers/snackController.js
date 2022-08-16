//dependencies
const express = require("express");
const { getOneSnack } = require("../queries/snacks");
// const { checkSnackId } = require("../validation/snackCheck");

//sub routes
const snack = express.Router();

//show route
//get an individual snack with given id
snack.get("/:snackId", async (req, res) => {
  const { snackId } = req.params;

  try {
    const returnedSnack = await getOneSnack(snackId);
    //received is a property from the error message object, it shows
    //how many search result are returned, if it is 0, means not result in db
    if (returnedSnack.received === 0) {
      res.status(404).json({ success: false, payload: "not found" });
    } else {
      res.status(200).json({ success: true, payload: returnedSnack });
    }
  } catch (error) {
    res.status(404).send(`No such snack with id of ${snackId}`);
  }
});

module.exports = snack;
