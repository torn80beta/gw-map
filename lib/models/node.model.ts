// import mongoose from "mongoose";

import mongoose, { Document, Schema } from "mongoose";

export interface INode extends Document {
  street: string;
  building: string;
  entrance: string;
  placement: string;
  description: string;
  tel1: string;
  comment1: string;
  tel2: string;
  comment2: string;
  gw: string;
  fibers: string;
  user: string;
  updatedAt: {
    type: DateConstructor;
    default: () => number;
  };
}

const nodeSchema: Schema<INode> = new Schema({
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

// const Node: Model<INode> = mongoose.model<INode>("Node", nodeSchema);

const Node = mongoose.models.Node || mongoose.model("Node", nodeSchema);

export default Node;
