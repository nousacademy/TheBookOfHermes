var express = require('express');
var path = require('path');
var app = express();


 // app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/hermeticSrc')));


app.get('/', function(req, res) {
    res.send('/hermeticSrc');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://', host, port);
});

app.post('/post', function(req, res){

	res.send('got it')
})

//unused stuff

// app.post("/ask", function(req, res) {

// });

