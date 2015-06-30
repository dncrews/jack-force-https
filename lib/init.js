
module.exports = function(olympus, stack) {
  stack.useAfter('config', 'config:forceHttps', function(data) {
    var app = data.app;

    app.use(function(req, res, next) {
      if (req.secure) return next();

      // res.redirect(req.protocol + 's://' + req.headers.host + req.url);
      res.redirect(301, req.protocol + 's://' + req.headers.host + req.url);
    });
  });
};
