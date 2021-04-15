const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    // required : (ones that are needed by either/both choice(s)) ??
    exercises: [
      {
        // both
        type: {
          type: String,
          trim: true,
          required: "Resistance or Cardio",
        },
        // both
        name: {
          type: String,
          trim: true,
          required: "Enter exercise name",
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        distance: {
          type: Number,
        },
        // both
        duration: {
            type: Number,
            required: "Duration of exercise",
          },
      },
    ],
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
