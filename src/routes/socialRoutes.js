const express = require("express");
const router = express.Router();
const {
  getSocials,
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial,
} = require("../controllers/socialController");

router.route("/").get(getSocials).post(createSocial);

router.route("/:id").get(getSocial).put(updateSocial).delete(deleteSocial);

module.exports = router;
