var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var CONFIG = require('./src/config/config')
//require('babel-polyfill');

app.use(bodyParser.json());

require('./src/routes')(app);

app.listen(CONFIG.PORT, () => {
    console.log(`Listening port ${CONFIG.PORT}`);
})