const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service:'163',
    port:465,
    secure:true,
    auth:{
        user:'m13413684903@163.com',
        pass:'8354439hzb'
    }
});
function sendMail(mail,code,call){
    let mailOptions = {
        from: '"Fred Foo 👻" <m13413684903@163.com>', 
        to: mail, 
        subject: '欢迎注册后台管理系统', 
        text: 'hey', 
        html: `<h3>您的验证码是:${code},请注意安全性，该验证码有效期为5分钟</h3>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        call(-1);
    }
        call(0);
    });
}

module.exports={sendMail}