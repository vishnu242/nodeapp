
var express = require('express');
var app = express();
var apicalls = require('./controllers/apicalls');

app.use('/employees', apicalls);
app.listen(3002);

