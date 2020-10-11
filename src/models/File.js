const { Schema, model } = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const FileSchema = new Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    
    createdAt: {
        type: Date,
        default: Date.now
    },
});

FileSchema.pre('save', function() {
    if (!this.url) {
        this.url = `http://localhost:3333/files/${this.key}`;
    }
});

FileSchema.pre('remove', function() {
    return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'uploads', 'files', this.key));
});

module.exports = model('File', FileSchema);