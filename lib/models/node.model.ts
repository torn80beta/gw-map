import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
  // id: { type: String, required: true },
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
  gw: { type: String, required: true },
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

const Node = mongoose.models.Node || mongoose.model("Node", nodeSchema);

export default Node;
