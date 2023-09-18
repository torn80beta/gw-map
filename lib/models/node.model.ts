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
  entrance: {
    type: String,
    required: true,
  },
  placement: { type: String, required: true },
  description: {
    type: String,
  },
  tel1: {
    type: String,
  },
  comment1: { type: String },
  tel2: {
    type: String,
  },
  comment2: { type: String },
  gw: { type: String, required: true },
  fibers: { type: String },
  user: {
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
