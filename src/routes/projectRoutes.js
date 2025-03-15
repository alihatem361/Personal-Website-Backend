const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const {
  upload,
  uploadToCloudinary,
} = require("../middleware/uploadMiddleware");

router
  .route("/")
  .get(getProjects)
  .post(upload.single("image"), uploadToCloudinary, createProject);

router
  .route("/:id")
  .get(getProject)
  .put(upload.single("image"), uploadToCloudinary, updateProject)
  .delete(deleteProject);

module.exports = router;
