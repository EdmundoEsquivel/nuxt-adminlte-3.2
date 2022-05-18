const express = require("express");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const UserController = require("./controllers/User.js");
const router = express.Router();

router.get(
  "/api/users/tokens/:token",
  UserController.getUserByResetPasswordToken
  // console.log ('entre')
);

// router.post(
//   "/api/users",
//   [
//     check("email").isEmail().normalizeEmail(),
//     check("password").isLength({ min: 6 }),
//   ],
//   UserController.create
// );

router.post(
  "/api/users",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    }),
  }),
  UserController.create
);

router.post(
  "/api/users/login",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    }),
  }),
  UserController.login
);

router.post(
  "/api/users/resetPassword",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
    }),
  }),
  UserController.resetPassword
);

router.post("/api/logout", (req, res) => {
  req.session.destroy((err) => {
    res.end();
  });
});

router.use(errors());
module.exports = router;
