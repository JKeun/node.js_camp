// function hello(name) {
//     console.log(name + "님, 안녕하세요");
// };

// module.exports = hello;


// 이렇게 줄여서 써도 가능함
module.exports = function(name) {
    console.log(name + "님, 안녕하세요");
};
