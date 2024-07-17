const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = fs.readFileSync('./data/video-details.json')
const videoDtls = JSON.parse(data)
const api = require('../public/middleware/apiKey')

router.post('/:id/comments', (req, res) => {
    const video = videoDtls.find(video => video.id === req.params.id)

    const comment = {
        id: api.apiId(),
        name: api.nameGen(),
        comment: req.body.comment,
        likes: 0,
        timestamp: Date.parse(new Date()),
    }

    video.comments.push(comment)

    fs.writeFileSync('./data/video-details.json', JSON.stringify(videoDtls, null, 2))

    res.send(video.comments)
})  


module.exports = router