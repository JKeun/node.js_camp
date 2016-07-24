var name = "JaeKeun Park";
var email = "jkpark@fastcampus.co.kr";
var phonenumber = "010-9525-0000";

// 현재 파일에 있는 name이라는 변수를
// 외부에서 nyName이라고 부를 수 있도록 한다.
// moduel.exports.외부에서부를이름 = 내부에있는객체;
// module.exports.myName = name;
// module.exports.email = email;

var config = {
    name: name,
    email: email,
    phonenumber: phonenumber
};

module.exports = config;
