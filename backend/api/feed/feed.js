const restful = require('node-restful')

const mongoose = restful.mongoose

const postSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Informe o título do post.'] },
    text: { type: String, required: false },
    url: { type: String, required: true },
    read: { type: Boolean, default:false, required: false }
})

const feedSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do feed.'] },
    url: { type: String, required: true },
    posts: [postSchema]
})

module.exports = restful.model('Feed', feedSchema)