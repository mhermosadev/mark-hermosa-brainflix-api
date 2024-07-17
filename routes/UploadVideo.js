const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = fs.readFileSync('./data/video-details.json')
const videoDtls = JSON.parse(data)
const api = require('../public/middleware/apiKey')

router.post('/', (req, res) => {
    if (!videoDtls) res.status(404).send({ message : 'No video with that id exists'})

       const newVideo = {

            id: api.apiId(),
            title: req.body.title,
            channel: api.nameGen(),
            image: "http://localhost:8000/images/Upload-video-preview.jpg",
            description: req.body.description,
            views: "34,544",
            likes: "2,439",
            duration: "3:01",
            video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
            timestamp: Date.parse(new Date()),
            comments: [
            
            ]}

        videoDtls.push(newVideo)

        fs.writeFileSync('./data/video-details.json', JSON.stringify(videoDtls, null, 2))

    res.send(videoDtls)
})

module.exports = router