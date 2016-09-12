var express = require('express');
var path = require('path');
var chalk = require('chalk');

module.exports = function (config) {
  var defaultConfig = {
    root: __dirname,
    port: 3000,
    host: 'localhost'
  }

  config = Object.assign(defaultConfig, config);

  var app = express();

  app.use(express.static(config.root));

  app.get("*", function(req, res){
    res.sendFile(path.resolve(config.root + '/index.html'));
  });

  app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

  console.log((chalk.cyan('Server started at http://' + config.host + ':' + config.port)));
}