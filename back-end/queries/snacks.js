const db = require("../db/dbConfig.js");

//GET all
const getAllSnacks = async () => {
	try {
		const allSnacks = await db.any("SELECT * FROM snacks");
		return allSnacks;
	} catch (error) {
		return error;
	}
};

//GET /:id
const getSnack = async (id) => {
	try {
		const snack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
		return snack;
	} catch (error) {
		return error;
	}
};

//CREATE
const createSnack = async ({ name, fiber, protein, added_sugar, is_healthy, image }) => {
	try {
		return await db.one(
			"INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
			[name, fiber, protein, added_sugar, is_healthy, image]
		);
	} catch (error) {
		return error;
	}
};

//DELETE
const deleteSnack = async (id) => {
	try {
		return await db.one("DELETE FROM snacks WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};

//UPDATE
const updateSnack = async (id, { name, fiber, protein, added_sugar, is_healthy, image }) => {
	try {
		return await db.one(
			"UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 WHERE id=$7 RETURNING *",
			[name, fiber, protein, added_sugar, is_healthy, image, id]
		);
	} catch (error) {
		return error;
	}
};
module.exports = { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack };
