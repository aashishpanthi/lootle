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
});

const Site = mongoose.model("Site", SiteSchema);

export default Site;
