const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  title: String,
  city: {
    type: String,
    maxlength: 2,
  },
  location: String,
  value: Number,
  description: String,
  pictures: String,
}, {timestamps:true})

module.exports = mongoose.model('Room', RoomSchema);