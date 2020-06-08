const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
  title: { type: String, required: true },
  poster: { type: String },
  synopsis: { type: String },
  rating: {type: Number},
  year: { type: Number },
  created_at: { type: Date, default: Date.now }
});

module.exports = model('Movie', MovieSchema);