const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String
},
{collection:'test'}
)

const User = mongoose.model('user',userSchema)

module.exports = User;