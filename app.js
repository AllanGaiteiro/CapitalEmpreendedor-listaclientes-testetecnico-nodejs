const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const app = express();


//// Modulos acresentados
    const handlebars  = require('express-handlebars');
    const adminRouter = require('./routes/admin');/// chamando rotas do admin

//// handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//// usuario acresentado
    app.use('/admin', adminRouter);

module.exports = app;
