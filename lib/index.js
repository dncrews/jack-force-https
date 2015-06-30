
var Plugin = require('olympus-plugin');

var force = new Plugin({
  name: 'force-https',
  basePath: __dirname,
});

module.exports = force.export;
