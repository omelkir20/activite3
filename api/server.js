const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Votre Nom",
    title: "DevSecOps Engineer",
    email: "contact@example.com",
    location: "Tunis",
    bio: "Passionné par le DevSecOps et l'automatisation."
  });
});
const projects = [
  { id: 1, name: "Portfolio", description: "Site portfolio Next.js", tech: ["Next.js", "Express"] },
  { id: 2, name: "CI/CD Pipeline", description: "Pipeline GitLab", tech: ["GitLab CI", "Docker"] }
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});
const skills = [
  { id: 1, name: "Docker", level: "Avancé" },
  { id: 2, name: "Ansible", level: "Intermédiaire" },
  { id: 3, name: "Node.js", level: "Avancé" }
];

app.get('/api/skills', (req, res) => {
  res.json(skills);
});
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API démarrée sur http://0.0.0.0:${PORT}`);
});
