const mongoose = require('mongoose');

/** DOCUMENTATION
 * 
 *  User Type 1 = Usuário Padrão
 *  User Type 2 = Usuário Locador
 * 
 */

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:String,
  birthdate: Date,
  type: {
    type: Number,
    default: 1,
  },
  phone: {
    type: String,
    default:null,
  },
  bio: {
    type: String,
    default:null,
  },
  avatar: {
    type: String,
    default:null,
  },
  terms: {
    type:Boolean,
    default:true,
  }
}, {timestamps:true})

module.exports = mongoose.model("User", UserSchema);