const indexCtrl = {};
const Movie = require('../models/Movie');

indexCtrl.renderIndex = (req, res) => {
  // render view index
  Movie.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    }
    res.render('index', { title: 'Movies', 'movies': docs });
  }).sort({ title: 'asc' });
};

indexCtrl.renderTop = (req, res) => {
  // render view top
  const movies = Movie.find({}).sort({ rating: 'desc' });
  res.render('top', { title: 'Top', movies });
};

indexCtrl.renderForm = (req, res) => {
  // render view form
  res.render('form_movie', { title: 'Add new Movie' });
};

indexCtrl.saveMovie = async (req, res) => {
  // save movie 
  const newMovie = new Movie({
    title: req.body.title,
    synopsis: req.body.synopsis,
    rating: req.body.rating,
    poster: 'images/' + req.file.filename,
    year: req.body.year
  });

  try {
    await newMovie.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect('/');
};

module.exports = indexCtrl;