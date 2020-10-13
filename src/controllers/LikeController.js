const User = require("../models/User");

module.exports = {
  async store(request, response) {
    const user = await User.findById(request.headers.user);

    if(user.liked.filter(like => like == request.params.room_id).length > 0) {
      return response.status(400).json({
        message: `Quarto ${request.params.room_id} já se encontra favoritado`,
        data: user.liked,
      })
    }

    user.liked.push(request.params.room_id);
    await user.save();

    return response.status(200).json({
      message: `Quarto ${request.params.room_id} favoritado com sucesso`,
      data: user,
    })
  },

  async delete(request, response) {
        const user = await User.findById(request.headers.user);

    if(user.liked.filter(like => like == request.params.room_id).length == 0) {
      return response.status(400).json({
        message: `Quarto ${request.params.room_id} não se encontra favoritado`,
        data: null
      })
    }

    user.liked.remove(request.params.room_id);
    await user.save();

    return response.status(200).json({
      message: `Quarto ${request.params.room_id} removido dos favoritos com sucesso`,
      data: user,
    })
  },
}