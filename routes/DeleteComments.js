const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = fs.readFileSync('./data/video-details.json')
const videoDtls = JSON.parse(data)


router.delete('/:id/comments/:commentsid', (req, res) => {

    const video = videoDtls.find(video => video.id === req.params.id)
    const comment = video.comments.find(comment => comment.id === req.params.commentsid)
    const index = video.comments.indexOf(comment)
    
    video.comments.splice(index, 1)
    
    fs.writeFileSync('./data/video-details.json', JSON.stringify(videoDtls, null, 2))

    res.send(video.comments)
})  

module.exports = router