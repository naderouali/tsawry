const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcrypt");
//const Joi = require('@hapi/joi');
const jwt = require("jsonwebtoken");
const verify = require("./verifyToken");

//validation
// const schema ={
//   email: Joi.string().min(1).required().email()
// }

router.get("/", verify, (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post(async (req, res) => {
  //validate data
  //const validation = Joi.validate(req.body, schema);

  //checking if email exists already in DB
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).send("mail mawjoud already, try to login.");

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = hashedPassword;
  const birthday = Date.parse(req.body.birthday);

  const newUser = new User({ firstname, lastname, email, password, birthday });

  newUser
    .save()
    .then(() => res.json({ newUser: newUser._id }))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("mail mch mawjoud , try to register.");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("wrong pass");
  else {
    //create and assign a jwt
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  }
});

router.get("/profile", verify, (req, res) => {
  //const iduser = User.findbyOne({ _id: req.user });
  //const emailuser = User.findbyOne({ email: req.iduser });
});

module.exports = router;
