var static = require('node-static');
var file = new static.Server('./public');

require('http').createServer(function(req, res) {
  file.serve(req, res);
}).listen(8001, function() {
  console.log("Go http://localhost:8001/");
});
