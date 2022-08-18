//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const snacks = express.Router();
//import db
const db = require('../db/dbConfig');

//import validation

const {  checkName } = require('../validation/checkSnacks');
const {  validateString } = require('../validation/checkSnacks');
const confirmHealth = require('../confirmHealth');

const {
  getAllSnacks,
  getASnack,
  createSnack,
  updateSnack,
  deleteSnack,
} = require('../queries/snacks');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none

//Index
snacks.get('/', async (req, res) => {
  console.log('get all /');
 
  // try {

  const allSnacks = await getAllSnacks();
  if (allSnacks) {
    res.status(200).json({ success: true, payload: allSnacks });
  } else {
    res.status(500).json({ error: 'server error' });
  }
});

//Show
snacks.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;
  // try {
  const snack = await getASnack(id);
  if (snack.id) {
    res.status(200).json({ success: true, payload: snack });
  } else {
    res.status(404).json({ success: false, payload: 'not found' });
  }
});

//CREATE
snacks.post(
  '/',
  checkName,
  async (req, res) => {
    const { body } = req;
    body.name = validateString(body);
    body.is_healthy = confirmHealth(body);

    const newSnack = body;

    try {
      console.log('post/');
      console.log(body);
      const addSnack = await createSnack(newSnack);
      res.status(200).json({ success: true, payload: addSnack });
    } catch (error) {
      res.status(404).json({ error: error.message || error });
    }
  }
);

//DELETE
snacks.delete('/:id', async (req, res) => {
  console.log('Delete /:id', req.body, req.params);
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json({ payload: deletedSnack, success: true });
  } else {
    res.status(404).json({ payload: 'not found', success: false });
  }
});

//update
snacks.put('/:id',  checkName, async (req, res) => {
  console.log('Put /:id');
  const { id } = req.params;
  const { body } = req;
    body.name = validateString(body);
    body.is_healthy = confirmHealth(body);
   
  const updatedSnack = await updateSnack(id, body);
  if (updatedSnack.id) {
    res.status(200).json({ success: true, payload: updatedSnack });
  } else {
    res.status(404).json({ payload: 'bad request', success: false });
  }
});

module.exports = snacks;
