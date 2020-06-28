var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    usn: String,
    semester: String,
    department: String,
    section: String

});


module.exports = mongoose.model("User", UserSchema);