require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: "https://outpro-india65-416t.vercel.app",
  methods:["GET", "POST", "PUT", "DELETE"],
  credentials: true // ✅ Update with your frontend URL
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ================= ROOT ROUTE (IMPORTANT FOR RENDER) =================
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

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/projects", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
  } catch (err) {
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

app.get("/testimonials", async (req, res) => {
  try {
    const data = await Testimonial.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/testimonials", async (req, res) => {
  try {
    const item = new Testimonial(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
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

app.get("/services", async (req, res) => {
  try {
    const data = await Service.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/services", async (req, res) => {
  try {
    const item = new Service(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start server LAST (after all routes are defined)
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// ✅ MongoDB connection (separate)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch((error) => console.error("❌ MongoDB error:", error));