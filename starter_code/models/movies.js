const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  director: String,
  stars: [{ type: String }],
  image: String,
  description: String,
  showtimes: [{ type: String }]
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
