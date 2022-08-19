const express = require('express');
const {
  getSnacksAll,
  createSnack,
  getSnack,
  deleteSnack,
  updateSnack,
} = require('../queries/snacks');
const snacks = express.Router();

snacks.get('/', async (request, response) => {
  const allSnacks = await getSnacksAll();
  if (allSnacks[0]) {
    response.status(200).json({ success: true, payload: allSnacks });
  } else {
    console.error(allSnacks);
    response
      .status(404)
      .json({ error: 'Something went wrong retrieving all snacks.' });
  }
});

snacks.get('/:id', async (request, response) => {
  const { id } = request.params;
  const snack = await getSnack(id);
  if (id) {
    response.status(200).json({ success: true, payload: snack });
  } else if (!id) {
    response.status(404).send(`No such song with id of ${id}`);
  }
});

snacks.put('/:id', async (request, response) => {
  try {
    const snackUpdated = await updateSnack(request.params.id, request.body);
    response.status(200).json({ success: true, payload: snackUpdated });
  } catch (error) {
    response.status(404).json({ success: false, error: 'Update song failed.' });
  }
});

snacks.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack) {
    response.status(200).json({ success: true, payload: deletedSnack });
  } else if (!deletedSnack) {
    console.error(deletedSnack);
    response
      .status(404)
      .json({ success: false, error: 'Error, Song could not be deleted.' });
  }
});

snacks.post('/', async (request, response) => {
  const newSnack = await createSnack(request.body);
  if (newSnack.name === true && newSnack.image === true) {
    response.status(200).json({ success: true, payload: newSnack });
  } else if (newSnack.name === true && newSnack.image === null) {
    response.status(200).json({ success: true, payload: newSnack });
  } else {
    response
      .status(404)
      .json({ success: false, error: 'Creation of song failed.' });
  }
});

module.exports = snacks;
