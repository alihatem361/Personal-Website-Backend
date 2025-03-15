const multer = require("multer");
const { cloudinary } = require("../config/cloudinary");

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Middleware for handling file upload to Cloudinary
const uploadToCloudinary = async (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
      folder: "personal-website",
    });

    // Add the URL to the request body
    req.body.imeg = result.secure_url;

    next();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error uploading file", error: error.message });
  }
};

module.exports = { upload, uploadToCloudinary };
