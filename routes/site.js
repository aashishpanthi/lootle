import express from "express";
import {
  getAllSites,
  getASite,
  addSite,
  deleteSite,
  getSitesByType,
} from "../controllers/site.js";

const router = express.Router();

router.route("/").get(getAllSites); //Route for getting all Sites
router.route("/:name").get(getASite); // Routing for getting specific site
router.route("/type/:type").get(getSitesByType); // Routing for getting all sites by type
router.route("/").post(addSite); // Route for adding Site
router.route("/:name").delete(deleteSite); // Route for deleting specific site

export default router;
