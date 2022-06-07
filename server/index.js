const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const EasyYandexS3 = require('easy-yandex-s3');

require('dotenv').config()

const port = process.env.PORT || 3000
const appName = process.env.APP_NAME


const app = express();
var indexRouter = require('./routes/index');

var s3list = require('./routes/s3List')

/* app.use('/', indexRouter); */
//app.use('/users', usersRouter);
app.use('/list', s3list);
app.get('/', function (req, res) {res.send('Hello!')})
app.listen(port, console.log(`The app '${appName}' is listening on port ${port}`))