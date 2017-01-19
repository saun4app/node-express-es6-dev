import express from 'express';
import cors from 'cors';
let get_ip = require('ipware')().get_ip;

var app = express();

app.set('port', (process.env.PORT || 3030));
app.use(cors()); // allow reqeust from client browers

app.get('/', function(request, response) {
    response.send('');
});

app.get('/query/:q', function(request, response) {
    let q = request.params.q;
    response.send(q);
});

app.get('/json/:q', function(request, response) {
    let q = JSON.parse(request.params.q);
    response.json(q);
});

app.get('/ip/', function(request, response) {
    var ip_obj = get_ip(request);
    response.json(ip_obj);
});

app.all('/*', function(request, response) {
    response.redirect('/');
});

app.listen(app.get('port'), function() {
    console.log('Running on port', app.get('port'));
});
