var http = require('http');
var express = require('express');
//var bodyParser = require('body-parser');
var morgan = require('morgan');
var dishRouter = require('./routes/dishRouter');
var promotionRouter = require('./routes/promotionRouter');
var leadershipRouter = require('./routes/leadershipRouter');
var app = express();


var host = 'localhost';
var port = '3001';

//morgan middleware for logging
app.use(morgan('dev'));


//available resource routes
app.use('/dishes',dishRouter);
app.use('/promotions',promotionRouter);
app.use('/leadership',leadershipRouter);
//static middlewware for location of static pages
app.use(express.static(__dirname+'/public'));


app.listen(port,host,()=>{
    console.log(`server is listening on port:${3001}`)
});