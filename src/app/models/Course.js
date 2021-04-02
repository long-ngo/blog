const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        videoId: { type: String, required: true },
        level: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true }
    },
    {
        timestamps: true
    }
);

Course.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true
});

module.exports = mongoose.model('Course', Course);
