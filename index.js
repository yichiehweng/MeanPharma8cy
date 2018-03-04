var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var debug = require('debug')('mean-pharmacy:server');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

var medicine=require('./server/routes/medicine.route');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist'))); 

app.use('/medicine', medicine);

app.use(function(req, res, next) {
    var err = new Error('Not Found'); 
    err.status = 404; 
    next(err); 
  });

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500); 
    res.render('error');
  });


var port = normalizePort(process.env.PORT || '1337');
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }
 
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }