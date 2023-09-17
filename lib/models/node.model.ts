import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  building: {
    type: String,
    required: true,
  },
  tel1: {
    type: String,
  },
  comment1: { type: String, required: true },
  tel2: {
    type: String,
  },
  comment2: { type: String },
  fibers: {
    type: [{ color: String, target: String }],
  },
  author: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Node = mongoose.models.Thread || mongoose.model("Node", nodeSchema);

export default Node;
