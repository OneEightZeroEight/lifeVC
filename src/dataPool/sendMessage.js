var https = require('https');
var querystring = require('querystring');
 
function sendMessage(option){
    this.protocol = 'https';
    this.url = 'sms-api.luosimao.com';
    this.path = '/v1/send.json';
    this.username = 'api';
    // this.key = 'key-a60ec996cd0aa22a7b83690195e807e3';//账号!!!改这个
    this.key = 'key-9ae2ca263b44d834224f91ceeecd4535';//账号!!!改这个
}
//luosimao
sendMessage.prototype.sendMessage = function(mobile,code,callback){
    var postData = {
        mobile: mobile,
        message:'您的验证码是：' + code +'，五分钟内有效【铁壳测试】'
    };
    var content = querystring.stringify(postData);
    var req = https.request({
        host:this.url,
        path:this.path,
        method:'POST',
        auth:  this.username + ':' + this.key,
        agent:false,
        rejectUnauthorized : false,
        headers:{
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Content-Length' : content.length
        }
    }, function(res){
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            callback(JSON.parse(chunk));
        });
    });
    req.write(content);
    req.end();
};
module.exports = sendMessage;