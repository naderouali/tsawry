const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
