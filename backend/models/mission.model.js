const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const missionSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      minlength: 3,
    },
    title: { type: String, trim: true },
    description: { type: String },
    date: {
      type: Date,
    },
    city: { type: String, trim: true },
  },
  { timestamps: true }
);

const Mission = mongoose.model("Mission", missionSchema);

module.exports = Mission;
