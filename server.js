var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});



io.on('connection', function (socket) {
    // var user = Date.now();  // для рандомного нейминга =)
    var Username ;
    
    /* 
                устанавливаем имя пользователя
    */
    socket.on('userLoggedIn', function (name) {
        io.emit(name);                                                   // для клиента
        console.log('Добро пожаловать : ' + name + ' !');               // для сервера
        return Username = name  ;
    });

    /* 
                Когда кто либо пишет сообщения      
    */
    socket.on('message.sent', function (message) {
        io.emit('message', Username + ': ' + message);                  // для клиента
        console.log(Username + ': ' + message);                         // для сервера

   
    });

    // console.log('User ' + user + ' connected');      //  random nameing
    console.log('User  connected');
});


http.listen(8000, function () {
  console.log('http://localhost:8000');

});



/* 

            для  отправки сообщений на email ( доработка)
*/

// 'use strict';
// const nodemailer = require('nodemailer');

// // Generate test SMTP service account from ethereal.email
// // Only needed if you don't have a real mail account for testing
// nodemailer.createTestAccount((err, account) => {

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: account.user, // generated ethereal user
//       pass: account.pass // generated ethereal password
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//     from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
//     to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world?', // plain text body
//     html: '<b>Hello world?</b>' // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Message sent: %s', info.messageId);
//     // Preview only available when sending through an Ethereal account
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   });
// });




