require("dotenv").config();
const   express = require('express'),
        app = express(),
        port = process.env.PORT,
        bodyParser = require('body-parser'),
        logger = require('morgan'),
        cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());
app.use(cors()) 
app.use(express.static('images'))
app.use(logger('dev'));
const routes = require('./src/routes/routes');
app.use('/api/v1',routes)

app.listen(port);
console.log('RESTful API Hiring Channel App server started on: ' + port);

module.exports = app;
