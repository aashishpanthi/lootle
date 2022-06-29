import Site from "../models/SiteModel.js";
import Joi from "joi";

// Get a specific Track by id
export const testURL = async (req, res, next) => {
  const { value: url, error } = Joi.string()
    .uri()
    .required()
    .validate(req.params.id);
  if (error) return res.status(400).json({ error: error.details, url });

  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im;
  //check URL
  const match = url.match(regex);

  const domain = match[1]; // get the domain of site form url

  console.log(domain);

  try {
    const site = await Site.findOne({ name: domain });
    if (!site) {
      return res.status(404).json({ message: "Site doesn't exist" });
    }

    const resObject = {
      type: site.type,
      site: site.name,
    };

    res.status(200).json(resObject);
  } catch (error) {
    res.status(400).json({ message: "Request failed", error: error });
  }
};
