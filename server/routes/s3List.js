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
router.get('/:id', async function (req, res, next) {
    //var list = await s3.GetList(' /pro-business-park/ ');
    var list = await s3.GetList(req.params.id);
    res.json(list)
});
module.exports = router;

