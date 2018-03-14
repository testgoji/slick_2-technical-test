var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
  id: String,
  title: String,
  complete: Boolean
}, {
  timestamps: true
});


// Ensure virtual fields are serialised.
TodoSchema.set('toJSON', {
    virtuals: true
});


module.exports = mongoose.model('Todo', TodoSchema);
