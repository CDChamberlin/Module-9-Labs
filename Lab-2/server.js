const express = require("express");
require("dotenv").config();

let dbConnect = require("./dbConnect");
// Imports routes:
const { postRoutes, commentRoutes, userRoutes } = require("./routes");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Module 9, Lab 2: MongoDB Blog Application",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
