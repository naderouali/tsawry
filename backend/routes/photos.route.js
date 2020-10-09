const router = require("express").Router();
let Photo = require("../models/photo.model");

router.route("/").get((req, res) => {
  Photo.find()
    .then((photos) => res.json(photos))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const url = req.body.url;

  const newPhoto = new Photo({ title, url });

  newPhoto
    .save()
    .then(() => res.json("Photo added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
