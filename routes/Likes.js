const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = fs.readFileSync('./data/video-details.json')
const videoDtls = JSON.parse(data)

router.patch('/:id/likes', (req, res) => {
    
    const video = videoDtls.find(video => video.id === req.params.id)
    
    let updatedLike = req.body.like + 1

    video.likes = updatedLike.toLocaleString()

    fs.writeFileSync('./data/video-details.json', JSON.stringify(videoDtls, null, 2))

    res.send(video)
})  

module.exports = router