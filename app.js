var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Future home of the Furry Robot – Everyone start by taking baby steps!');
});

app.use('/assets', express.static('public'));

var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Furry robots are scrambling to obey you at http://%s:%s', host, port);
});
