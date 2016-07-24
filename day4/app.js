//var name = require("./config").myName;
//var email = require("./config").email;

// console.log(name);
// console.log(email);

// var config = require("./config");
// console.log(config);

// hello는 함수이름일뿐 중요한 요소는 아님, 아무거나 가능
// var hello = require("./hello");
// hello("박재근");


// node app.js 01022205736 01095257900 "hello world"
// cli application ( process.argv )
var sendSms = require("./sms");
// sendSms("01022205636", "01095257900", "hello world");
// process.argv => ["node", "app.js", sender, receiver, content]
var sender = process.argv[2];
var receiver = process.argv[3];
var content = process.argv[4];
sendSms(sender, receiver, content);












