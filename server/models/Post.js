const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  relevance: { type: Boolean, default: false },
}, { timestamps: true });

// Transform output to match frontend's expected format ('id' instead of '_id', 'time' instead of 'createdAt')
PostSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.time = "Just now"; // Simplification for MVP
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Post', PostSchema);
