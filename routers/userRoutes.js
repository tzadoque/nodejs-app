const UserController = require('../controllers/userController');

module.exports = app => {
  app.get('/users', UserController.findAll);

  app.post('/users', UserController.create);

  app
    .route('/users/:id')
    .get(UserController.findById)
    .put(UserController.update)
    .delete(UserController.delete);
};
