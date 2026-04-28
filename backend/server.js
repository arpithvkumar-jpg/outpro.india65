require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

// ================= ROOT ROUTE =================
app.get("/", (req, res) => {
  res.send("API is running...");
});


// ================= PROJECT =================
const projectSchema = new mongoose.Schema({
  title: String,
  desc: String,
  details: [String],
  image: String,
  video: String,
  type: String,
  tags: [String],
});

const Project = mongoose.model("Project", projectSchema);

// GET
app.get("/projects", async (req, res) => {
  try {
    const data = await Project.find();
    res.json(data); // send data
  } catch (err) {
    console.log(err);
    res.json([]); // send empty if error
  }
});

// POST
app.post("/projects", async (req, res) => {
  try {
    const item = new Project(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error("Project Save Error:", err);
    res.status(500).json({ error: err.message });
  }
});


// ================= TESTIMONIAL =================
const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  text: String,
  image: String,
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// GET
app.get("/testimonials", async (req, res) => {
  try {
    const data = await Testimonial.find();
    res.json(data); // send data
  } catch (err) {
    console.log(err);
    res.json([]); // send empty if error
  }
});

// POST
app.post("/testimonials", async (req, res) => {
  try {
    const item = new Testimonial(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error("Testimonial Save Error:", err);
    res.status(500).json({ error: err.message });
  }
});


// ================= SERVICE =================
const serviceSchema = new mongoose.Schema({
  title: String,
  desc: String,
  tags: [String],
});

const Service = mongoose.model("Service", serviceSchema);

// GET
app.get("/services", async (req, res) => {
  try {
    const data = await Service.find();
    res.json(data); // send data
  } catch (err) {
    console.log(err);
    res.json([]); // send empty if error
  }
});

// POST
app.post("/services", async (req, res) => {
  try {
    const item = new Service(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error("Service Save Error:", err);
    res.status(500).json({ error: err.message });
  }
});


// ================= CONNECT DB + START SERVER =================
// Check if MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.warn("⚠️ MONGO_URI not defined - server will run without database");
}

mongoose.connect(process.env.MONGO_URI || "dummy")
.then(() => {
  console.log("✅ Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

})
.catch((error) => {
  console.warn("⚠️ MongoDB connection failed - server will run without DB:", error.message);
  
  // Start server anyway even without DB
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} (without database)`);
  });
});