const Room = require("../models/Room");
const User = require("../models/User");

module.exports = {
  /** GET METHODS */
  async index(request, response) {
     const rooms = !request.query ? await Room.find({}) : await Room.where(request.query).find({});

     return response.status(200).json({
      message: `${rooms.length} ${rooms.length === 1 ? 'quarto encontrado' : 'quartos encontrados'}`,
      data: rooms,
     });
  },

  async show(request, response) {
    const room = await Room.findById(request.params.room_id, "_id title city location value description pictures");

    if (!room) {
      return response.status(404).json({
        message: `Quarto não encontrado`,
        data: null,
      })
    }

    return response.json({
      message: `Quarto ${room._id} encontrado com sucesso`,
      data: room,
    })
  },

  /** POST METHODS */
  async store(request, response) {
    const {
      title,
      city,
      location,
      value,
      description,
      pictures,
      user_id,
    } = request.body

    const data = {
      title,
      city,
      location,
      value,
      description,
      pictures,
      user_id,
    }

    const user = await User.findById(user_id);

    if (user._id == user_id && user.type !== 2) {
      return response.status(400).json({
        message: `Quarto não pode ser cadastrado, usuário nao possui permissões de locador`,
        data: null,
      })
    }

    const room = await Room.create(data)

    return response.status(200).json({
    message: `Quarto cadastrado com sucesso`,
      data: room,
    })
  },

  /** PUT METHODS */
  async update(request, response) {
    const room = await Room.findByIdAndUpdate(request.params.user_id, {$set: request.body}, {new: true});
    
    if (!room) {
      return response.status(404).json({
        message: `Quarto não encontrado`,
        data: null,
      })
    }

    return response.status(200).json({
      message: `Quarto ${room._id} atualizado com sucesso`,
      data: room
    })
  },

  /** DELETE METHODS */
  async destroy (request, response) {
    const room = await Room.findByIdAndDelete(request.params.room_id);
    
    if (!room) {
      return response.status(404).json({
        message: `Quarto não encontrado`,
        data: null,
      })
    }

    return response.status(200).json({
      message: `Quarto ${room._id} deletado com sucesso`,
      data: room,
    })
  }
}