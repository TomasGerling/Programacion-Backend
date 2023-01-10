const cookieParser = require('cookie-parser');
const express = require('express')
require('dotenv').config();
const indexRouter = require('./src/routes/index');
const logger = require('morgan');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('tiny'));


const COOKIES_SECRET = process.env.COOKIES_SECRET || '3445';

app.use(cookieParser(COOKIES_SECRET));

app.use(session({
    secret:COOKIES_SECRET,
    resave: true,
    saveUninitialized: true
}));


app.use(indexRouter);


module.exports = app;