const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = fs.readFileSync('./data/video-details.json')
const videoDtls = JSON.parse(data)

router.patch('/:id/comments/:commentsid', (req, res) => {

    const video = videoDtls.find(video => video.id === req.params.id)
    const comment = video.comments.find(comment => comment.id === req.params.commentsid)
    let updatedLike = req.body.like + 1
    comment.likes = updatedLike
    
    fs.writeFileSync('./data/video-details.json', JSON.stringify(videoDtls, null, 2))

    res.send(video.comments)
})  

module.exports = router