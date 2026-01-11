import mongoose from "mongoose";

const snippetVersionSchema = new mongoose.Schema(
  {
    snippetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Snippet",
      required: true,
    },

    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SnippetVersion = mongoose.model("SnippetVersion", snippetVersionSchema);

export default SnippetVersion;
