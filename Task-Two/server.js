const express = require('express');
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser')
const Post = require('./model/schema')
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// connected to the database
const connectDb = require('./DB/connectDB');
connectDb()

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // To parse JSON data
app.use(cors())

// User API endpoint
app.post('/user/api', async(req, res) => {
    try {
        const post = new Post({
            username: req.body.username,
            email: req.body.email,
            bio: req.body.email,
            followers: req.body.followers,
            following: req.bodyfollowing,
            posts: req.body.posts
        });

        await post.save()
        res.status(201).json(post, {message: 'Successfully create a user Collection'})
    } catch (error) {
        console.log(error, 'post could not be create!')
    }
})

// post API endpoint
app.post('/post/api', async(req, res) => {
    try {
        const response = await new Post({
            content: req.body.content,
            media: req.body.media,
            likes: req.body.liked,
            comments: req.body.comments,
            createdAt: req.body.createdAt
        })
        await response.save();
        res.status(200).json(response, {message: 'Successfully create Post Api'})
    } catch (error) {
        res.status(501).json({message: 'request could not be resolved'})
        console.log(error, 'could not create api endPoint')
    }
})

//  Comment Collection API endpoint
app.post('/comment/api', async(req, res) => {
    try {
        const response = new Post({
            post_id: req.body.post_id,
            user_id: req.body.user_id,
            content: req.body.content,
          createdAt: req.body.createdAt
        })
        if(response == true){
            response.save();
            res.status(2001).json(response, {message: 'Successfully create comment API'})
        }else{
            console.log('an error occur comment api could not be resolved')
        }
    } catch (error) {
        console.log(error)
    }
})

// Feed Collection API endpoint
app.post('/feed/api', async(req, res) => {
    try {
        const feedRes = await new Post({
            user_id: req.body.user_id,
            feed: red.body.feed
        });
        await feedRes.save()
        res.status(200).json(feedRes, {message: 'Successfully create feed api'})
    } catch (error) {
        console.log(error, 'an error occur')
    }
})

app.use('/', (req, res) => {
    res.send('Hello World')
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})