const Social = require("../models/Social");

// Get all socials
exports.getSocials = async (req, res) => {
  try {
    const socials = await Social.find();
    res.json(socials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single social
exports.getSocial = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res.status(404).json({ message: "Social link not found" });
    }
    res.json(social);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create social
exports.createSocial = async (req, res) => {
  const social = new Social(req.body);
  try {
    const newSocial = await social.save();
    res.status(201).json(newSocial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update social
exports.updateSocial = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res.status(404).json({ message: "Social link not found" });
    }
    Object.assign(social, req.body);
    const updatedSocial = await social.save();
    res.json(updatedSocial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete social
exports.deleteSocial = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res.status(404).json({ message: "Social link not found" });
    }
    await social.deleteOne();
    res.json({ message: "Social link deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
