const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = fs.readFileSync('./data/video-details.json')
const videoDtls = JSON.parse(data)

router.get('/:id', (req, res) => {
    const video = videoDtls.find(video => video.id === req.params.id)
    if (!video) res.status(404).send({ message : 'No video with that id exists'})
    res.send(video)
})

module.exports = router