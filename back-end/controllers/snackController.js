const express = require("express");
const {
	getAllSnacks,
	getSnack,
	updateSnack,
	createSnack,
	deleteSnack,
} = require("../queries/snacks");
const snackController = express();

snackController.get("/", async (request, response) => {
	const allSnacks = await getAllSnacks();
	if (allSnacks[0]) {
		response.status(200).json({
			success: true,
			payload: allSnacks,
		});
	} else {
		response.status(500).json();
	}
});

snackController.get("/:id", async (request, response) => {
	const { id } = request.params;
	const snack = await getSnack(id);
	if (snack.id) {
		response.status(200).json({
			success: true,
			payload: snack,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `not found: no snack is listed at id${id}`,
		});
	}
});

snackController.delete("/:id", async (request, response) => {
	const { id } = request.params;
	const deletedSnack = await deleteSnack(id);
	if (deletedSnack) {
		if (deletedSnack.id) {
			response.status(200).json({
				success: true,
				payload: deletedSnack,
			});
		} else {
			response.status(404).json({
				success: false,
				payload: deletedSnack,
			});
		}
	} else {
		response.status(500).json({
			success: false,
			payload: deletedSnack,
		});
	}
});

module.exports = snackController;
