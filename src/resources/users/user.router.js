const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  // res.statusCode = 202;
  // res.setHeader('Content-Type', 'application/json');
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const users = await usersService.getAll();

  // res.statusCode = 202;
  // res.setHeader('Content-Type', 'application/json');
  // map user fields to exclude secret fields like "password"
  res.json(User.toResponse(users[1]));
});

module.exports = router;
