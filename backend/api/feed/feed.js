const restful = require('node-restful')

const mongoose = restful.mongoose

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: false },
    url: { type: String, required: true },
    read: { type: Boolean, default:false, required: false }
})

const feedSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    posts: [postSchema]
})

module.exports = restful.model('Feed', feedSchema)