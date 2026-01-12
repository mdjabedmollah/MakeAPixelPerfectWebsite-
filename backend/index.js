import express from "express";
import nodenv from "dotenv";
import { dbConnection } from "./utils/db.js";
import cors from "cors";
const app = express();
nodenv.config();
const port = process.env.PORT || 3000;
//data base
dbConnection();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
