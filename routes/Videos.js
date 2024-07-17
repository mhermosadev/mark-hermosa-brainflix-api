const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = fs.readFileSync('./data/video-details.json')
const video = JSON.parse(data)

router.get('/', (req, res) => {
    res.send(video)
})

module.exports = router