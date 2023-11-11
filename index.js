import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

app.use("/posts", postRoutes);

const port = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello to memories API");
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => app.listen(port, () => console.log(`Server runnning on port:${port}`)))
  .catch((err) => console.log(err.message));
