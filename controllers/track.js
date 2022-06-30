import Track from "../models/TrackModel.js";
import Joi from "joi";

// Get all Tracks
export const getAllTracks = async (req, res, next) => {
  try {
    const allTracks = await Track.find();
    res.status(200).json(allTracks);
  } catch (error) {
    res.status(400).json({ message: "Request failed", error: error });
  }
};

// Get a specific Track by id
export const getATrack = async (req, res, next) => {
  try {
    const oneTrack = await Track.findOne({ _id: req.params.id });
    if (!oneTrack) {
      return res.status(404).json({ message: "Track doesn't exist" });
    }
    res.status(200).json(oneTrack);
  } catch (error) {
    res.status(400).json({ message: "Request failed", error: error });
  }
};

// Get all Tracks of a specific user
export const getUserTrack = async (req, res, next) => {
  try {
    const tracks = await Track.find({ user: req.params.email });

    if (tracks.length < 1) {
      return res
        .status(404)
        .json({ message: "User doesn't have any track", tracks });
    }
    res.status(200).json(tracks);
  } catch (error) {
    res.status(400).json({ message: "Request failed", error });
  }
};

// Add a new Track
export const addTrack = async (req, res, next) => {
  const schema = Joi.object({
    user: Joi.string().required(),
    name: Joi.string().required(),
    url: Joi.string().required(),
    site: Joi.string().required(),
    type: Joi.string().required(),
    demandPrice: Joi.number().required(),
    image: Joi.string(),
  });

  const { value: trackInfo, error } = schema.validate(req.body);
  if (error)
    return res.status(400).json({ error: error.details, ...trackInfo });

  const track = new Track(trackInfo);
  try {
    await track.save((err, track) => {
      res.status(200).json({ success: true, id: track._id });
    });
  } catch (err) {
    next(err);
    res.status(400).json({ error: err, ...trackInfo });
  }
};

// Delete a specific Track
export const deleteTrack = async (req, res, next) => {
  const TrackId = req.params.id;
  try {
    await Track.deleteOne({ _id: TrackId });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: "Request failed" });
  }
};
