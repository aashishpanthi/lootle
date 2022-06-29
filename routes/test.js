import express from "express";
import { testURL } from "../controllers/test.js";

const router = express.Router();

router.route("/").post(testURL); // Routing for getting url and test it if it is real

export default router;
