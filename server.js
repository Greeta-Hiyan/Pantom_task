const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

const log4js = require('log4js');
const logger = log4js.getLogger('SERVER');

log4js.configure('./log4js.json');

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

let conf = {};

try {
    conf = require(process.env.Home + '/config/conf')
    console.log(new Date() + " the server run with " + conf.web.port);
} catch {
    conf = require('./conf');
    console.log(new Date() + " the server run with " + conf.web.port);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.conf = conf;
app.logger = logger;

const server = require('http').Server(app);
server.listen(conf['web']['port']);

const APIRoute = require('./router/api-router');
new APIRoute(app, router)

logger.error('Test Server Node Listening on ' + conf['web']['port']);