const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    imeg: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    technology: [
      {
        type: String,
        required: true,
      },
    ],
    demo: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false,
    },
    video: {
      type: String,
      required: false,
    },
    videoKey: {
      type: String,
      required: false,
    },
    codeStatus: {
      type: String,
      enum: ["PUBLIC", "PRIVATE"],
      default: "PUBLIC",
    },
    loomVideo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
