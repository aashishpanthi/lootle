import Site from "../models/SiteModel.js";
import Joi from "joi";

// Get all sites
export const getAllSites = async (req, res, next) => {
  try {
    const allSites = await Site.find();
    res.status(200).json(allSites);
  } catch (error) {
    res.status(400).json({ message: "Request failed", error: error });
  }
};

// Get a specific site by name
export const getASite = async (req, res, next) => {
  try {
    const site = await Site.findOne({ name: req.params.name });
    if (!site) {
      return res.status(404).json({ message: "Site doesn't exist" });
    }
    res.status(200).json(site);
  } catch (error) {
    res.status(400).json({ message: "Request failed", error: error });
  }
};

// Get all sites of a specific type
export const getSitesByType = async (req, res, next) => {
  try {
    const sites = await Site.find({ type: req.params.type });

    if (sites.length < 1) {
      return res
        .status(404)
        .json({ message: "No sites exists of this type", sites });
    }
    res.status(200).json(sites);
  } catch (error) {
    res.status(400).json({ message: "Request failed", error });
  }
};

// Add a new site
export const addSite = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    priceLocation: Joi.string().required(),
  });

  const { value: siteInfo, error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details, ...siteInfo });

  const site = new Site(siteInfo);
  try {
    await site.save((err, s) => {
      res.status(200).json({ success: true, id: s._id });
    });
  } catch (err) {
    next(err);
    res.status(400).json({ error: err, ...siteInfo });
  }
};

// Delete a specific site
export const deleteSite = async (req, res, next) => {
  const siteName = req.params.name;
  try {
    await Site.deleteOne({ name: siteName });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: "Request failed" });
  }
};
