const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    category: { type: String, required: true },        
    tags: [{ type: String }],
    fields: [{}],   
    likes: Number,    
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Post', postSchema);
