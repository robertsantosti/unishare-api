const User = require('../models/User');
const bcrypt = require('bcrypt');
const express = require('express');

module.exports = {
    async auth(request, response) {
      const {email, password} = request.body;

      const user = await User.findOne({email}, "_id name email password");

      if(!bcrypt.compareSync(password, user.password)) {
        return response.status(400).json({
          message: `Senhas não conferem`,
          data: null,
        })
      }
      
      return response.status(200).set('X-User', user._id).json({
        message: `Usuário logado com sucesso`,
        data: null,
      });

    },

    async logout(request, response) {
      response.removeHeader('X-User');

      return response.json({
        message: `Usuário deslogado com sucesso`,
        data:null,
      });
    }
}