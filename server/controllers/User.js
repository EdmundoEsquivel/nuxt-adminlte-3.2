const crypto = require("crypto");
const moment = require("moment");
const models = require("../models/index.js");
const bcrypt = require("bcryptjs");

exports.create = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    console.log(salt);

    const hash = await bcrypt.hash(req.body.password, salt);

    let user = await models.User.create({
      email: req.body.email,
      password: hash,
    });

    user = user.toJSON();
    user.isAutenticated = true;
    delete user.password;

    req.session.user = user;
    console.log(req.session.user);

    res.status(200).json(req.session.user);
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
 
    let user = await models.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.status(401).end("correo no existe");
    }
    // user.password
    // bcrypt.compare()
    const isValid = await bcrypt.compare(req.body.password, user.password);

    if (isValid === false) {
      res.status(401).end("usurio o contraseña incorrectos");
    }
    user = user.toJSON();
    user.isAutenticated = true;
    delete user.password;

    console.log(req.session.user);
    req.session.user = user;
    //conitnue code
    res.json(req.session.user);
  
};

exports.resetPassword = async (req, res) => {
  try {
    const user = await models.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(404).end("no existe ningun usurio con ese correo");
    }
    const token = crypto.randomBytes(16).toString("hex");
    user.update({
      resetPasswordToken: token,
      resetPasswordTokenExpiration: moment().add(30, "minute").format(),
    });
    res.json(token);
  } catch (err) {
    throw Error(err);
  }

  res.end("listo entre");
};

exports.getUserByResetPasswordToken = async (req, res) => {
  try {
    const user = await models.User.findOne({
      where: {
        resetPasswordToken: req.params.token,
      },
    });
    if (!user) {
      return res.status(500).end("ningun usuario encontrado");
    }
    res.json(user);
  } catch (err) {
    throw Error(err);
  }
};
