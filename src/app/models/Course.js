const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
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

CourseSchema.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true
});

//Query Helpers
CourseSchema.query.sortTable = function(req) {
    if (req.query.hasOwnProperty('_sort')) {
        return this.sort({ 
            [req.query.collumn]: req.query.type
        });
    }
    return this;
}


module.exports = mongoose.model('Course', CourseSchema);
