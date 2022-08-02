'use strict';

// 引入SDK
const Client = require('@alicloud/ocr-2019-12-30');

// 创建实例
const client = new Client({
    accessKeyId: 'bopQh7An......',
    accessKeySecret: 'xVREevsgHCpFWk..........',
    securityToken: '', // 支持STS
    endpoint: 'https://ocr.cn-shanghai.aliyuncs.com'
});

// 发起调用
// 具体API，返回Promise
// 车牌识别
const data = client.recognizeLicensePlate({
    "ImageURL": "https://viapi-demo.oss-cn-shanghai.aliyuncs.com/viapi-demo/images/RecognizeLicensePlate/licensePlate.jpg"
}, { timeout: 10000 }).then(function (data) {
    console.log('Result:' + JSON.stringify(data));
}, function (err) {
    console.log('Error:' + err);
});

// 银行卡识别
client.recognizeBankCard({
    "ImageURL": "https://viapi-demo.oss-cn-shanghai.aliyuncs.com/viapi-demo/images/RecognizeBankCard/bankcard.jpg"
}, { timeout: 10000 }).then(function (data) {
    console.log('Result:' + JSON.stringify(data));
}, function (err) {
    console.log('Error:' + err);
});

// 身份证识别
client.recognizeIdentityCard({
    "Side": "face",
    "ImageURL": "https://viapi-demo.oss-cn-shanghai.aliyuncs.com/viapi-demo/images/RecognizeIdentityCard/identityCard.jpg"
}, { timeout: 10000 }).then(function (data) {
    console.log('Result:' + JSON.stringify(data));
}, function (err) {
    console.log('Error:' + err);
});