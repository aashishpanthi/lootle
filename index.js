//import dependencies
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

//router imports
import trackRoutes from "./routes/tracks.js";

//making instance
const app = express();
dotenv.config();

//middleware
app.use(express.json({ extented: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//inserting  router
app.use("/api/tracks", trackRoutes);

//Server listening to port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//Connect database
connectDB();
