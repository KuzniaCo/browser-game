import express from 'express';
export const router = express.Router();

const controller = require('../controllers/index');

/* GET home page. */
router.get('/', controller.get_Homepage );

router.get('/character', controller.get_Character );

router.get('/login', function(req, res, next) {
  res.render('loginView');
});
