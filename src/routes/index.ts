import express from 'express';
export const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/character', function(req, res, next) {
  res.render('character', { testejs: 'hi!' });
});

router.get('/login', function(req, res, next) {
  res.render('loginView');
});

router.get('/register', function(req, res, next) {
  res.render('registerView');
});


