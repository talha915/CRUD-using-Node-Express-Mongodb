var app = require('./app');
var port = 300;

var server = app.listen(port, function(res, err){
    console.log("Running server on port", port);
})