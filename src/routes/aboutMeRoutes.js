const express = require("express");
const router = express.Router();
const {
  getAboutMe,
  updateAboutMe,
} = require("../controllers/aboutMeController");
const { upload, uploadToFirebase } = require("../middleware/uploadMiddleware");

router
  .route("/")
  .get(getAboutMe)
  .post(upload.single("image"), uploadToFirebase, updateAboutMe)
  .put(upload.single("image"), uploadToFirebase, updateAboutMe);

module.exports = router;
