const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const missionSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 3,
    },
    title: { type: String, required: true, trim: true },
    description: { type: String },
    date: {
      type: Date,
      required: true,
    },
    city: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Mission = mongoose.model("Mission", missionSchema);

module.exports = Mission;
