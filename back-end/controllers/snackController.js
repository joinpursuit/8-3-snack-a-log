const express = require('express');
const {
  getSnacksAll,
  createSnack,
  getSnack,
  deleteSnack,
  updateSnack,
} = require('../queries/snacks');
const snacks = express.Router();

/* get snack */
snacks.get('/', async (req, res) => {
  let snacks = await getSnacksAll();
  console.log(snacks);
  res.status(200).json({ success: true, payload: snacks });
});

/* create snack */
snacks.get('/', async (req, res) => {
  let getTheSnacks = await getSnacksAll();
  if (getTheSnacks[0]) {
    console.log('dummy');
    res.status(200).json(getSnacksAll);
  } else {
    res.status(500).json({ error: 'server error' });
  }
});

snacks.post('/', async (request, response) => {
  let snacksNew = await createSnack(request.body);
  if (snacksNew.name.length > 0 && snacksNew.image.length > 0) {
    response.status(200).json({ success: true, payload: snacksNew });
  }
});

/* delete snack*/

snacks.get('/:id', async (request, response) => {
  let { id } = request.params;
  let snacky = await getSnack(id);
  if (snacky) {
    response.status(200).json({ success: true, payload: snacky });
  } else {
    response.status(404).json({ error: 'Snack not found' });
  }
});
snacks.delete('/:id', async (request, response) => {
  let { id } = request.params;
  let snackity = await deleteSnack(id);
  if (snackity) {
    response.status(200).json({ success: true, payload: snackity });
  } else {
    response.status(404);
  }
});

/* update snack */
snacks.put('/:id', async (request, response) => {
  try {
    let snackUpdated = await updateSnack(request.params.id, request.body);
    response.status(200).json({ success: true, payload: snackUpdated });
  } catch (error) {
    console.log(error);
    response.status(404).json({ error: 'Snack not found' });
  }
});

module.exports = snacks;
