const express = require('express')
const router = express.Router()
const api = require('../public/middleware/apiKey')

router.get('/', (req, res) => {
    res.send(api.apiKey())
})

module.exports = router