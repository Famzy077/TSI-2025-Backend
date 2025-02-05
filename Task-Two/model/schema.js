const mongoose = require('mongoose');
const schema = new mongoose.Schema([
    // User Collection
    {
        _id: String,
        username: String,
        email: String,
        bio: String,
        followers: Number,
        following: Number,
        posts: String
    },
    // Post Collection
    {
        _id: mongoose.Schema.Types.ObjectId,      // Unique identifier for the post
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User who created the post
        content: String,
        media: String, // Array of media file paths (images, videos)
        likes: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] },  // Array of user IDs who liked the post
        comments: { type: [mongoose.Schema.Types.ObjectId], ref: 'Comment', default: [] },  // Array of comment IDs
        createdAt: { type: Date, default: Date.now }  // Date of post creation

    },
    // Comment Collection
    {
        _id: mongoose.Schema.Types.ObjectId,
        post_id: Number,
        user_id: Number,
        content: String,
        createdAt: { type: Date, default: Date.now }
    },
    // Feed Collection
    {
        user_id: Number,
        feed: typeof [
            {post_id1: Number},
            {post_id2: Number}
        ]
    }
    
])
// module.exports = mongoose.model('Post', schema)

const Post = mongoose.model('Post', schema)
module.exports = Post