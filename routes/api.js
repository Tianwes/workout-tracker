const router = require("express").Router();
const db = require("../models");

// CRUD : Create, Read, Update, Delete
//        Post    Get    Put    Delete

// (GET)  last workout
router.get("/workouts", (req, res) => {
  db.Workout.find({});
  console.log("routes/api.js line 10")
    .then((data) => {
      console.log("routes/api.js line 12");
      console.log(data)
      res.json(data);
    })
    .catch((err) => {
      console.log("Error - routes/api.js line 17");
      res.json(err);
    });
});

// (PUT)   add exercise
router.put("/api/workouts/:id", (req, res) => {
//  ENDED HERE MONDAY 4/12
});

// (POST)  create workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
})

// (GET)  get workout ranges
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
