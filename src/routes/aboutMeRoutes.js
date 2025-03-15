const express = require("express");
const router = express.Router();
const {
  getAboutMe,
  updateAboutMe,
} = require("../controllers/aboutMeController");
const {
  upload,
  uploadToCloudinary,
} = require("../middleware/uploadMiddleware");

router
  .route("/")
  .get(getAboutMe)
  .post(upload.single("image"), uploadToCloudinary, updateAboutMe)
  .put(upload.single("image"), uploadToCloudinary, updateAboutMe);

module.exports = router;
