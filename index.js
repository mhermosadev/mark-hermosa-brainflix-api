const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())

//ROUTES//
const videosRoute = require('./routes/Videos')
const videosDetailsRoute = require('./routes/Videos-Details')
const homeRoute = require('./routes/Home')
const registerRoute = require('./routes/Register')
const commentsRoute = require('./routes/Comments')
const DeleteCommentsRoute = require('./routes/DeleteComments')
const uploadVideoRoute = require('./routes/UploadVideo')
const likesRoute = require('./routes/Likes')
const likeCommentsRoute = require('./routes/LikeComments')
const {queryValidator} = require('./public/middleware/apiKey')

//STATIC DATA//
app.use('/', express.static("public"), homeRoute)
app.use('/images', express.static("public"))

//GET REQUEST/
app.use('/register', registerRoute)

app.use(queryValidator) //MIDDLEWARE TO ENSURE ALL REQUEST HAS AN APIKEY//
app.use('/videos', videosRoute)
app.use('/videos', videosDetailsRoute)

//POST REQUEST//
app.use('/videos', commentsRoute)
app.use('/videos', uploadVideoRoute)

//DELETE REQUEST// 
app.use('/videos', DeleteCommentsRoute)

//PATCH REQUEST//
app.use('/videos', likesRoute)
app.use('/videos', likeCommentsRoute)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`listening on port ${port}`))