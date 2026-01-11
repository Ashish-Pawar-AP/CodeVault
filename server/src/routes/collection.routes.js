import express from "express";
import protect from "../middleware/auth.middleware.js";

import {
  createCollection,
  getCollections,
  updateCollection,
  deleteCollection
} from "../controllers/collection.controller.js";

const router = express.Router();

router.post("/", protect, createCollection);
router.get("/", protect, getCollections);
router.put("/:id", protect, updateCollection);
router.delete("/:id", protect, deleteCollection);

export default router;
