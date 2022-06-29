import express from "express";
import {
  getAllTracks,
  getATrack,
  addTrack,
  deleteTrack,
  getUserTrack,
} from "../controllers/track.js";

const router = express.Router();

router.route("/").get(getAllTracks); //Route for getting all Tracks
router.route("/:id").get(getATrack); // Routing for getting specific Track
router.route("/user/:email").get(getUserTrack); // Routing for getting specific user Track
router.route("/").post(addTrack); // Route for adding Track
router.route("/:id").delete(deleteTrack); // Route for deleting specific Tracks

export default router;
