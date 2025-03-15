const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { upload, uploadToFirebase } = require("../middleware/uploadMiddleware");

router
  .route("/")
  .get(getProjects)
  .post(upload.single("image"), uploadToFirebase, createProject);

router
  .route("/:id")
  .get(getProject)
  .put(upload.single("image"), uploadToFirebase, updateProject)
  .delete(deleteProject);

module.exports = router;
