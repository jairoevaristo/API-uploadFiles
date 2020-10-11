const { Schema, model } = require('mongoose');

const FileSchema = new Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = model('File', FileSchema);