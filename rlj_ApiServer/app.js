const express = require('express'),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser'),
    CONFIG = require('./src/config/config')
// PAMUL = require('./src/helper/ProcessAndMemoryUsageLogger');

app.use(bodyParser.json());
app.use(router);

require('./src/routes_index')(router);

app.listen(CONFIG.PORT, () => {
    console.log(`Listening to port ${CONFIG.PORT}`);
})
