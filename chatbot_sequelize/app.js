/************* global require *************/
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const passportModule = require('./passport');
const cors = require('cors');
const { sequelize } = require('./models');
const method = require('./middlewares/method-mw');
const locals = require('./middlewares/locals-mw');
const session = require('./middlewares/session-mw');

/*************** sequelize init **************/
require('./modules/sequelize-init')(sequelize);

/*************** server init **************/
require('./modules/server-init')(app, process.env.PORT);

/*************** static init **************/
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/************** view engine ***************/
app.set('view engine', 'ejs');
app.set('views', './views');
app.locals.pretty = true;

/*************** middleware ***************/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(method());
app.use(session(app));
app.use(cors());

/**************** passport ****************/ // 패스포트 세팅 무조건 넣음
passportModule(passport);
app.use(passport.initialize());
app.use(passport.session());

/***************** locals *****************/
app.use(locals);

/*************** router init **************/
const chatRouter = require('./routes/chat');
const apiRouter = require('./routes/api');

app.use('/chat', chatRouter);
app.use('/api', apiRouter);

/**************** error init **************/
const _404Router = require('./routes/error/404-router');
const _500Router = require('./routes/error/500-router');

app.use(_404Router);
app.use(_500Router);
