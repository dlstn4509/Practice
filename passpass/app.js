/************* global require *************/
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const method = require('./middlewares/method-mw');

/*************** server init **************/
require('./modules/server-init')(app, process.env.PORT);

/*************** static init **************/
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'storages')));

/************** view engine ***************/
app.set('view engine', 'ejs');
app.set('views', './views');
app.locals.pretty = true;

/*************** middleware ***************/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(method());

/*************** router init **************/
const passportRouter = require('./routes/passport');

app.use('/passport', passportRouter);

/**************** error init **************/
const _404Router = require('./routes/error/404-router');
const _500Router = require('./routes/error/500-router');

app.use(_404Router);
app.use(_500Router);
