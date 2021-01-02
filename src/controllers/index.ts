export const get_Homepage = function(req, res, next) {
    res.render('index', { title: 'Express' });
  }

export const get_Character = function(req, res, next) {
    res.render('character', { testejs: 'hi!' });
  }