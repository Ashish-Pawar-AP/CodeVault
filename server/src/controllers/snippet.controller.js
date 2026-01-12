import Snippet from "../models/Snippets.models.js";
import SnippetVersion from "../models/SnippetVersion.models.js";

/* ================= CREATE SNIPPET ================= */
export const createSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.create({
      ...req.body,
      userId: req.user._id,
    });

    res.status(201).json(snippet);
  } catch (error) {
    res.status(500).json({ message: "Failed to create snippet" });
  }
};

/* ================= GET ALL SNIPPETS ================= */
export const getMySnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json(snippets);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch snippets" });
  }
};

/* ================= GET SINGLE SNIPPET ================= */
export const getSnippetById = async (req, res) => {
  try {
    const snippet = await Snippet.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.status(200).json(snippet);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch snippet" });
  }
};

/* ================= UPDATE SNIPPET ================= */
export const updateSnippet = async (req, res) => {
  try {
    await SnippetVersion.create({
      snippetId: snippet._id,
      code: snippet.code,
    });
    const snippet = await Snippet.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.status(200).json(snippet);
  } catch (error) {
    res.status(500).json({ message: "Failed to update snippet" });
  }
};

/* ================= DELETE SNIPPET ================= */
export const deleteSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.status(200).json({ message: "Snippet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete snippet" });
  }
};

/* ================= COPY SNIPPET ================= */
export const copySnippet = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    snippet.copyCount += 1;
    await snippet.save();

    res.status(200).json({
      message: "Snippet copied",
      code: snippet.code,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to copy snippet" });
  }
};

/* ================= SEARCH SNIPPETS ================= */
export const searchSnippets = async (req, res) => {
  try {
    const { q, language, category } = req.query;

    const query = {
      userId: req.user._id,
    };

    if (q) {
      query.title = { $regex: q, $options: "i" };
    }

    if (language) {
      query.language = language;
    }

    if (category) {
      query.category = category;
    }

    const snippets = await Snippet.find(query).sort({ createdAt: -1 });

    res.status(200).json(snippets);
  } catch (error) {
    res.status(500).json({ message: "Search failed" });
  }
};

export const getSnippetVersions = async (req, res) => {
  const versions = await SnippetVersion.find({
    snippetId: req.params.id,
  }).sort({ createdAt: -1 });

  res.status(200).json(versions);
};
