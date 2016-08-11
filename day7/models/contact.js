var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    name: String,
    email: String,
    phonenumber: String
});


var Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;


// 일반적으로 사람들은 이렇게 코딩함 ( 줄여서 )
// module.exports = mongoose.model("Contact", new Schema({
//     email: String,
//     name: String,
//     ....
// }));
