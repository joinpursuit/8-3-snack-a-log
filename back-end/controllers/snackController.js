//dependencies
const express = require("express");
const {
  getOneSnack,
  deleteSnack,
  getAllSnacks,
  postNewSnack,
  updateTheSnack,
} = require("../queries/snacks");
const { checkImage, checkSnackName } = require("../validation/snackCheck");

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

//index route
//get all snacks
snacks.get("/", async (req, res) => {
  try {
    const allSnacks = await getAllSnacks();
    res.status(200).json({ success: true, payload: allSnacks });
  } catch (error) {
    res.status(404).json({ sucess: false });
  }
});

//new route
//add a snack into the database
snacks.post("/", checkImage, checkSnackName, async (req, res) => {
  const newSnack = req.body;

  try {
    const postedSnack = await postNewSnack(newSnack);
    //use postedSnack[0] because postNewSnack will return an array and
    //the postedSnack[0] is the snack added into the database
    res.status(200).json({ success: true, payload: postedSnack[0] });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false });
  }
});

//edit route
//edit a snack inside the database
snacks.put("/:snackId", checkImage, checkSnackName, async (req, res) => {
  const { snackId } = req.params;

  try {
    const updatedSnack = await updateTheSnack(req.body, snackId);
    res.status(200).json({ success: true, payload: updatedSnack });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false });
  }
});
module.exports = snacks;
