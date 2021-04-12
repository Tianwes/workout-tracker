const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    // required : (ones that are needed by either/both choice(s)) ??
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Resistance or Cardio",
        },
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
        duration: {
            type: Number,
            required: "Duration of exercise",
          },
      },
    ],
  }
);

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
