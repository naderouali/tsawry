const router = require("express").Router();
let Mission = require("../models/mission.model");

router.route("/missions").get((req, res) => {
  Mission.find()
    .then((missions) => res.json(missions))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const title = req.body.title;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const city = req.body.city;

  const newMission = new Mission({ email, title, description, date, city });

  newMission
    .save()
    .then(() => res.json("Mission added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Mission.findById(req.params.id)
    .then((mission) => res.json(mission))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Mission.findByIdAndDelete(req.params.id)
    .then(() => res.json("mission deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Mission.findById(req.params.id)
    .then((mission) => {
      mission.email = req.body.email;
      mission.title = req.body.title;
      mission.description = req.body.description;
      mission.date = Date.parse(req.body.date);
      mission.city = req.body.city;
      mission
        .save()
        .then(() => res.json("mission updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
