var http = require('http');
var urlLib = require('url');

var port = 9000;
var data = { name: 'jifeng', company: 'taobao' };

http
  .createServer(function(req, res) {
    var params = urlLib.parse(req.url, true);
    console.log(params);
    if (params.query && params.query.callback) {
      var str = params.query.callback + '(' + JSON.stringify(data) + ')'; //jsonp
      res.end(str);
    } else {
      res.end(JSON.stringify(data)); //普通的json
    }
  })
  .listen(port, function() {
    console.log('server is listening on port ' + port);
  });
