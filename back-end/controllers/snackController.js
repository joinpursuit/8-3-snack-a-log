const express = require('express')
const snacks = express.Router()

const {
  getAllSnacks,
  getSnack,
  deleteSnack,
  updateSnack,
  createSnack,
} = require('../queries/snacks')

const {
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
} = require('../Validation/Validation')

/*Indexy*/
snacks.get('/', async (req, res) => {
  const allSnacks = await getAllSnacks()

  if (allSnacks) {
    res.status(200).json({ payload: allSnacks })
  } else {
    console.log('we have errors')
    res.status(404).json({ status: 404, error: 'error' })
  }
})

/*Each*/
snacks.get('/:id', async (req, res) => {
  const { id } = req.params
  const snack = await getSnack(id)
  if (snack[0]) {
    res.status(200).json({ success: true, payload: snack[0] })
  } else {
    res.status(404).json({ success: false, payload: 'not found' })
  }
})

/*Create*/
snacks.post(
  '/',
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    const newSnack = await createSnack(req.body)
    if (newSnack) {
      res.status(200).json({ success: true, payload: newSnack })
    } else {
      res.status(404).send({ success: false, payload: 'not found' })
    }
  }
)

/*Update*/
snacks.put(
  '/:id',
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    const { id } = req.params
    const updatedASnack = await updateSnack(id, req.body)

    if (updatedASnack.id) {
      res.status(200).json({ payload: updatedASnack })
    } else {
      res.status(404).json('snack not found')
    }
  }
)

/*Delete*/
snacks.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedSnacks = await deleteSnack(id)
  if (deletedSnacks.id) {
    res.status(200).json({ success: true, payload: deletedSnacks })
  } else {
    res.status(404).json({ success: false, payload: id })
  }
})

module.exports = snacks