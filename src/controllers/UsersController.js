const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  /** GET METHODS */
  async index(request, response) {
     const users = !request.query ? await User.find({}) : await User.where(request.query).find({});

     return response.status(200).json({
      message: `${users.length} usuários encontrados`,
      data: users,
     });
  },

  async show(request, response) {
    const user = await User.findById(request.params.user_id, "_id name email birthdate avatar liked bio phone");

    if (!user) {
      return response.status(404).json({
        message: `Usuário não encontrado`,
        data: null,
      })
    }

    return response.json({
      message: `Usuário ${user.email} encontrado com sucesso`,
      data: user,
    })
  },

  /** POST METHODS */
  async store(request, response) {
    const {
      name,
      email,
      password,
      confirm_password,
      birthdate,
      type,
      avatar,
      phone,
      bio,
      terms
    } = request.body

    if (password !== confirm_password) {
      return response.status(400).json({
        message: `Senhas não conferem`,
        data:null,
      })
    }

    if (!terms) {
      return response.status(400).json({
        message: `Para se cadastrar e necessario aceitar os termos`,
        data:null,
      })
    }

    if (await User.count({email}) > 0) {
      return response.status(400).json({
        message: `Usuário ja se encontra cadastrado no sistema`,
        data: await User.findOne({email}),
      })
    }

    const data = {
      name,
      email,
      password: bcrypt.hashSync(password,10),
      birthdate: new Date(birthdate),
      type,
      avatar,
      phone,
      bio
    }

    const user = await User.create(data)

    return response.status(200).json({
      message: `Usuário cadastrado com sucesso`,
      data: user,
    })
  },

  /** PUT METHODS */
  async update(request, response) {
    const user = await User.findByIdAndUpdate(request.params.user_id, {$set: request.body}, {new: true});
    
    if (!user) {
      return response.status(404).json({
        message: `Usuário não encontrado`,
        data: null,
      })
    }

    return response.status(200).json({
      message: `Usuário ${user.email} atualizado com sucesso`,
      data: user
    })
  },

  /** DELETE METHODS */
  async destroy (request, response) {
    const user = await User.findByIdAndDelete(request.params.user_id);
    
    if (!user) {
      return response.status(404).json({
        message: `Usuário não encontrado`,
        data: null,
      })
    }

    return response.status(200).json({
      message: `Usuário ${user.email} deletado com sucesso`,
      data: user
    })
  }
}