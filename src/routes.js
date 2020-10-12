const express = require('express');

const UsersController = require("./controllers/UsersController")

const routes = express();

/** User Routes */
routes.route('/users')
  .get(UsersController.index)
  .post(UsersController.store)

routes.route('/users/:user_id')
  .get(UsersController.show)
  .put(UsersController.update)
  .delete(UsersController.destroy)
/** Room Routes */
// routes.route('rooms')
//   .get()
//   .post()

// routes.route('rooms/:room_id')
//   .get()
//   .put()
//   .delete()

// routes.get('rooms/:room_id/status')

/** Like Routes */
// routes.route('rooms/:room_id/like')
//   .post()

module.exports = routes;