const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const EasyYandexS3 = require('easy-yandex-s3');
const axios = require('axios');

require('dotenv').config()

//import { Session, cloudApi, serviceClients } from '@yandex-cloud/nodejs-sdk'
const Session = require('@yandex-cloud/nodejs-sdk')
const cloudApi= require('@yandex-cloud/nodejs-sdk')
const serviceClients = require('@yandex-cloud/nodejs-sdk')

const { resourcemanager: { cloud_service: { ListCloudsRequest }}} = cloudApi;



const port = process.env.PORT || 3000
const appName = process.env.APP_NAME


const app = express();
//var indexRouter = require('./routes/index');

var s3list = require('./routes/s3List')

/* app.use('/', indexRouter); */
//app.use('/users', usersRouter);
app.use(cors({
    origin: 'http://localhost:8080'
}))
app.use('/list', s3list); 
app.get('/', function (req, res) {res.send('Hello!')})
app.get('/buckets', async (req, res) => {
    res.send(
        axios.get({
        method: 'get',
        url: 's3.yandexcloud.net'
        })
    )
    
}
)
app.listen(port, console.log(`The app '${appName}' is listening on port ${port}`))
