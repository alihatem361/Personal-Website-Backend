const AboutMe = require("../models/AboutMe");

// Get about me info
exports.getAboutMe = async (req, res) => {
  try {
    const aboutMe = await AboutMe.findOne();
    if (!aboutMe) {
      return res
        .status(404)
        .json({ message: "About me information not found" });
    }
    res.json(aboutMe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create or update about me info
exports.updateAboutMe = async (req, res) => {
  try {
    const aboutMe = await AboutMe.findOne();
    if (aboutMe) {
      // Update existing
      Object.assign(aboutMe, req.body);
      const updatedAboutMe = await aboutMe.save();
      res.json(updatedAboutMe);
    } else {
      // Create new
      const newAboutMe = new AboutMe(req.body);
      const savedAboutMe = await newAboutMe.save();
      res.status(201).json(savedAboutMe);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
