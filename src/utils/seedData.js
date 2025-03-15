const mongoose = require("mongoose");
const Project = require("../models/Project");
const AboutMe = require("../models/AboutMe");
const Social = require("../models/Social");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

// Load env vars
dotenv.config();

// Read JSON data
const jsonData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../projects.json"), "utf-8")
);

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB Connected for seeding..."))
  .catch((err) => console.error("MongoDB connection error:", err));

// Seed data function
const seedData = async () => {
  try {
    // Clear existing data
    await Project.deleteMany();
    await AboutMe.deleteMany();
    await Social.deleteMany();

    console.log("🗑️ Cleared existing data");

    // Seed Projects
    await Project.insertMany(jsonData.Projects);
    console.log("🚀 Projects data seeded!");

    // Seed AboutMe
    await AboutMe.insertMany(jsonData.aboutme);
    console.log("👤 AboutMe data seeded!");

    // Seed Socials
    await Social.insertMany(jsonData.socials);
    console.log("🔗 Socials data seeded!");

    console.log("✅ All data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

// Run the seed function
seedData();
