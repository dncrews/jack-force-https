var jack = require('jack-stack');

module.exports = function() {
  jack.useAfter('config', 'forceHttps', function(data) {
    var app = data.app;

    app.use(function(req, res, next) {
      if (req.secure) return next();

      res.redirect(301, req.protocol + 's://' + req.headers.host + req.url);
    });
  });
};
