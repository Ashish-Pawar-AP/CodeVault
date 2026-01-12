import express from "express";
import protect from "../middleware/auth.middleware.js";

import {
  createSnippet,
  getMySnippets,
  getSnippetById,
  updateSnippet,
  deleteSnippet,
  copySnippet,
  searchSnippets,
  getSnippetVersions,
} from "../controllers/snippet.controller.js";

const router = express.Router();

router.post("/", protect, createSnippet);
router.get("/", protect, getMySnippets);
router.get("/search", protect, searchSnippets);
router.get("/:id", protect, getSnippetById);
router.put("/:id", protect, updateSnippet);
router.delete("/:id", protect, deleteSnippet);
router.post("/:id/copy", protect, copySnippet);
router.get("/:id/versions", protect, getSnippetVersions);

export default router;
