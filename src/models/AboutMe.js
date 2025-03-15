const mongoose = require("mongoose");

const aboutMeSchema = new mongoose.Schema(
  {
    heaaderimag: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    bio: [
      {
        type: String,
        required: true,
      },
    ],
    cv: {
      type: String,
      required: false,
    },
    footer: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AboutMe", aboutMeSchema);
