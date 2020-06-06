const indexCtrl = {};
const Movie = require('../models/Movie');

indexCtrl.renderIndex = (req, res) => {
  res.render('index', { title: 'Express' });
}

module.exports = indexCtrl;