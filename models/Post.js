const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    postImg: String,
    likes: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: "General"
    },
    tags: [String],
    createAt: {
        type: Date,
        default: new Date()
    }
});
    
const Post = mongoose.model("Post", postSchema);

module.exports = Post;