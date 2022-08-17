// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const snackController = require("./controllers/snackController");
// CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors());
// MIDDLEWARE

// ROUTES
app.get("/", async (request, response) => {
	response.send("Get Snack'n at Snack-a-log!");
});
app.use("/snacks", snackController);
app.get("*", (request, response) => {
	response.status(404).send("Route error.");
});
// EXPORT
module.exports = app;
