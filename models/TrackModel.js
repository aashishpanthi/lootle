import mongoose from "mongoose";

const TrackSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "User email is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  trackerInintiated: {
    type: Date,
    default: Date.now,
  },
  url: {
    type: String,
    required: [true, "Link of the item is required"],
  },
  site: {
    type: String,
    required: [true, "Please provide the tracking website"],
  },
  image: String,
  type: {
    type: String,
    default: [true, "Please provide if stock or product needs to be tracked"],
  },
  history: [
    {
      price: Number,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  demandPrice: {
    type: Number,
    required: [true, "Please provide your budget"],
  },
  informed: {
    type: Boolean,
    default: false,
  },
});

const Track = mongoose.model("track", TrackSchema);

export default Track;
