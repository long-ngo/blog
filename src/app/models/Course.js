const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    videoId: { type: String },
    level: { type: String },
    // createAt: { type: Date },
    // updateAt: { type: Date }
});

module.exports = mongoose.model('Course', Course);
