

//https://www.npmjs.com/package/easy-yandex-s3

// Подключение модуля
var EasyYandexS3 = require('easy-yandex-s3');
// Инициализация
var s3 = new EasyYandexS3({
    auth: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
    Bucket: process.env.BUCKET,
    debug: true,
});

var express = require('express');
var router = express.Router();
var folderPath = 'esp';
router.get(folderPath, async function (req, res, next) {
    //var list = await s3.GetList(' /pro-business-park/ ');
    var list = await s3.GetList(folderPath);
    res.json(list)
});
module.exports = router;

