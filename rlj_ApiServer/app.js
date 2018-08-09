const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    CONFIG = require('./src/config/config')

app.use(bodyParser.json());

require('./src/routes_index')(app);

app.listen(CONFIG.PORT, () => {
    console.log(`Listening to port ${CONFIG.PORT}`);
})