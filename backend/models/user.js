const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
   email: { type: String, require: true, unique: true},
   name: { type: String, require: true},
   address: { type: String, require: true},
   telephone: { type: Number, require: true},
   position: { type: String },
   password: { type: String, require: true}  

});

userSchema.plugin(uniqueValidator);

 module.exports = mongoose.model("User", userSchema);