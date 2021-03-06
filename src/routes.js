const express = require('express');
const AuthController = require('./controllers/AuthController');
const LikeController = require('./controllers/LikeController');
const RoomsController = require('./controllers/RoomsController');
const UsersController = require("./controllers/UsersController")

const routes = express();

/** Auth Routes */
routes.post('/auth', AuthController.auth);
routes.get('/logout', AuthController.logout);

/** User Routes */
routes.route('/users')
  .get(UsersController.index)
  .post(UsersController.store)

routes.route('/users/:user_id')
  .get(UsersController.show)
  .put(UsersController.update)
  .delete(UsersController.destroy)

/** Quartos Routes */
routes.route('/rooms')
  .get(RoomsController.index)
  .post(RoomsController.store)

routes.route('/rooms/:room_id')
  .get(RoomsController.show)
  .put(RoomsController.update)
  .delete(RoomsController.destroy)

// routes.get('rooms/:room_id/status')

/** Like Routes */
routes.get('/rooms/:room_id/like', LikeController.store)
routes.get('/rooms/:room_id/dislike', LikeController.delete)

module.exports = routes;