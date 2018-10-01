const express = require('express'),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser'),
    CONFIG = require('./src/config/config'),
    cors = require('cors')
// PAMUL = require('./src/helper/ProcessAndMemoryUsageLogger');

app.use([
        cors(),
        bodyParser.json(),
        router
    ])
    .listen(CONFIG.PORT, () => {
        console.log(`Listening to port ${CONFIG.PORT}`);
    })

require('./src/routes_index')(router);