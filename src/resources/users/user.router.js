const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { errorsCatcher } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    errorsCatcher(async (req, res) => {
      const users = await usersService.getAll();

      res
        .status(200)
        .type('json')
        .json(users.map(User.toResponse));
    })
  )
  .post(
    errorsCatcher(async (req, res) => {
      const user = await usersService.addUser(req.body);

      res
        .status(200)
        .type('json')
        .json(User.toResponse(user));
    })
  );

router
  .route('/:userId')
  .get(
    errorsCatcher(async (req, res) => {
      const user = await usersService.getUser(req.params.userId);

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
  )
  .put(
    errorsCatcher(async (req, res) => {
      const user = await usersService.updateUser(req.params.userId, req.body);

      res
        .status(200)
        .type('json')
        .json(User.toResponse(user));
    })
  )
  .delete(
    errorsCatcher(async (req, res) => {
      await usersService.deleteUser(req.params.userId);

      res.status(204).end();
    })
  );

module.exports = router;
