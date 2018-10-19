const express = require('express'),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser'),
    { PORT } = require('./src/config/config'),
    cors = require('cors')
// PAMUL = require('./src/helper/ProcessAndMemoryUsageLogger');

app.use([
    cors(),
    bodyParser.json(),
    router
]).listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

require('./src/routes_index')(router);