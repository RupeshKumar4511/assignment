const express = require('express');
const authValidation = require('../Middlewares/AuthValidation');
const { signUpSchema, signInSchema } = require('../utils/userSchema');
const { checkSchema } = require('express-validator')
const { signup, signin,fetchUser } = require('../controllers/AuthControllers');
const ensureAuthenticated = require('../Middlewares/Auth');
const routes = express.Router();





routes.post('/signin', checkSchema(signInSchema), authValidation, signin);
routes.post('/signup', checkSchema(signUpSchema), authValidation, signup);
routes.post('/me',ensureAuthenticated,fetchUser);

routes.post('/sign-out', ensureAuthenticated, (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax',
  });
  return res.status(200).send({ message: "Logout Successfully", logout: true })


})



module.exports = routes;