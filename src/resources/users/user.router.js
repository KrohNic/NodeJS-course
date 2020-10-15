const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const tasksService = require('../tasks/task.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();

    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = await usersService.addUser(
      req.body.name,
      req.body.login,
      req.body.password
    );

    res
      .status(200)
      .type('json')
      .json(User.toResponse(user));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const user = await usersService.getUser(req.params.id);

    if (user) {
      res
        .status(200)
        .type('json')
        .json(User.toResponse(user));
    } else {
      res
        .status(404)
        .type('json')
        .json({});
    }
  })
  .put(async (req, res) => {
    const user = await usersService.updateUser(
      req.params.id,
      req.body.name,
      req.body.login,
      req.body.password
    );

    res
      .status(200)
      .type('json')
      .json(user);
  })
  .delete(async (req, res) => {
    const userId = req.params.id;
    const users = await usersService.deleteUser(userId);

    tasksService.unassignUserTasks(userId);

    res.json(users.map(User.toResponse));
  });

module.exports = router;
