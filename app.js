require('module-alias/register');
const express = require('express');
const indexRouter = require('./routes/index');
const dynmap = require('./routes/dynmap');
const dynmapi = require('./routes/dynmapinternal');
const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/map/', dynmap);
app.use('/map/dynmap-internal', dynmapi);

const server = app.listen(6969, () => {
    console.log(`Web Server Running On Port http://localhost:${server.address().port}`);
});
