//dependencies
const express = require("express");
const { getOneSnack, deleteSnack } = require("../queries/snacks");
// const { checkSnackId } = require("../validation/snackCheck");

//sub routes
const snacks = express.Router();

//show route
//get an individual snack with given id
snacks.get("/:snackId", async (req, res) => {
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

//delete route
//delete individual snack with given id
snacks.delete("/:snackId", async (req, res) => {
  const { snackId } = req.params;

  try {
    const deletedSnack = await deleteSnack(snackId);
    res.status(200).json({ success: true, payload: deletedSnack });
  } catch (error) {
    res.status(404).json({ success: false, payload: { id: undefined } });
  }
});

module.exports = snacks;
