const express = require('express')
const {
    createWork,
    getWork,
    getWorks,
    deleteWork,
    updateWork
} = require('../Controllers/WorkController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// GET all
router.get('/', getWorks)

//GET
router.get('/:id', getWork)

// POST
router.post('/', createWork)

// DELETE
router.delete('/:id', deleteWork)

// UPDATE
router.patch('/:id', updateWork)

module.exports = router;