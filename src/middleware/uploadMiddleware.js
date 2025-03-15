const multer = require("multer");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../config/firebase");

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Middleware for handling file upload to Firebase
const uploadToFirebase = async (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }

    const dateTime = Date.now();
    const fileName = `images/${dateTime}_${req.file.originalname}`;

    // Create file reference
    const storageRef = ref(storage, fileName);

    // Create file metadata including the content type
    const metadata = {
      contentType: req.file.mimetype,
    };

    // Upload the file
    const snapshot = await uploadBytes(storageRef, req.file.buffer, metadata);

    // Get the public URL
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Add the URL to the request body
    req.body.imeg = downloadURL;

    next();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error uploading file", error: error.message });
  }
};

module.exports = { upload, uploadToFirebase };
