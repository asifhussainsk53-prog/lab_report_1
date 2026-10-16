const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.get("/about", (req, res) => {
  res.json({
    name: "Asif",
    section: "Gen AI"
  });
});

app.get("/time", (req, res) => {
  res.send(new Date().toString());
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});