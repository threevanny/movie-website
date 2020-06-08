const express = require('express');
const router = express.Router();

const {
  renderIndex,
  renderForm,
  saveMovie,
  renderTop
} = require('../controllers/index.controller');

/* GET home page. */
router.get('/', renderIndex);
router.get('/new', renderForm);
router.post('/new', saveMovie);
router.get('/top', renderTop);

module.exports = router;