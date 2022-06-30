//import dependencies
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

//router imports
import trackRoutes from "./routes/tracks.js";
import siteRoutes from "./routes/site.js";
import testRoutes from "./routes/test.js";

//making instance
const app = express();
dotenv.config();

//middleware
app.use(express.json({ extented: false }));
app.use(cors());

//inserting  router
app.use("/api/tracks", trackRoutes);
app.use("/api/test", testRoutes);
app.use("/api/sites", siteRoutes);

//Server listening to port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//Connect database
connectDB();
