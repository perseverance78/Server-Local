// Mi punto de comienzo

var express = require('express');
var http = require('http');
var path = require('path');
//let mongose = require('mongoose');


/*var config = require('./config');*/

var userRoute = require('./routes/user.route');
const bodyParser = require('body-parser');

// Connect to mongoDB
/*mongose.connect(config.dbUrl);
mongoose.conection.on('connected', ()=>{
    console.log('connected to mongo database');
});

mongoose.conection.on('error', err=>{
    console.log('Error at mongoDB' + err);
})*/
var port = 1234;
var app = express();

// add middleware
app.use(bodyParser.json());
app.use('/users', userRoute);

// asignar recursos publicos al folder
app.use(express.static(__dirname + '/client/public'));

// Asignar el primer request
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = http.createServer(app);
server.listen(port, () =>{
    console.log(`server is starting : ${port} `)
});