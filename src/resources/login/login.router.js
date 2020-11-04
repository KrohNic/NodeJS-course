const router = require('express').Router();
const { errorsCatcher } = require('../../common/errorHandler');
const loginService = require('../../resources/login/login.service');

router.route('/').post(
  errorsCatcher(async (req, res) => {
    const { login, password } = req.body;

    const token = await loginService.signToken(login, password);

    if (token) {
      res
        .status(200)
        .type('json')
        .json({ token });
    } else {
      res.status(403).send('Wrong combination of login/password');
    }
  })
);

module.exports = router;
