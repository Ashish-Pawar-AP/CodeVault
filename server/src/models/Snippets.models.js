import mongoose from "mongoose";

const snippetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    language: {
      type: String,
      required: true, // javascript, python, html, etc.
    },

    code: {
      type: String,
      required: true,
    },

    tags: [
      {
        type: String,
      },
    ],

    category: {
      type: String,
      enum: ["API", "Component", "Utility", "Config", "Other"],
      default: "Other",
    },

    visibility: {
      type: String,
      enum: ["private", "public"],
      default: "private",
    },

    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    copyCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Snippet = mongoose.model("Snippet", snippetSchema);

export default Snippet;
