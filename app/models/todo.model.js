var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
  id: Number,
  title: String,
  complete: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);
