const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB and start server
mongoose.connect("mongodb+srv://arpithvkumar:Arpith%405555@cluster0.wzpckev.mongodb.net/outproindia?retryWrites=true&w=majority")
.then(() => {
  console.log("Connected to MongoDB");
  app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Schema
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

// API - GET projects
app.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// API - ADD project
app.post("/projects", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

// Testimonials Schema
const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  text: String,
  image: String,
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// GET testimonials
app.get("/testimonials", async (req, res) => {
  const data = await Testimonial.find();
  res.json(data);
});

// ADD testimonial
app.post("/testimonials", async (req, res) => {
  const item = new Testimonial(req.body);
  await item.save();
  res.json(item);
});
// Services Schema
const serviceSchema = new mongoose.Schema({
  title: String,
  desc: String,
  tags: [String],
});

const Service = mongoose.model("Service", serviceSchema);

// GET services
app.get("/services", async (req, res) => {
  const data = await Service.find();
  res.json(data);
});

// ADD service
app.post("/services", async (req, res) => {
  const item = new Service(req.body);
  await item.save();
  res.json(item);
});