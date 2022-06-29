import mongoose from "mongoose";

const SiteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Site name is required"],
  },
  SiteInintiated: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    required: [true, "Site type is required"],
  },
  priceLocation: {
    type: String,
    required: [true, "Class or id is required ro get the price"],
  },
  nameLocation: {
    type: String,
    required: [true, "Location of name is required"],
  },
  imageLocation: {
    type: String,
  },
});

const Site = mongoose.model("Site", SiteSchema);

export default Site;
