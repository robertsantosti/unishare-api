const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  },
}, {timestamps:true})

module.exports = mongoose.model('Room', RoomSchema);