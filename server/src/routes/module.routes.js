import express from "express";
import protect from "../middleware/auth.middleware.js";

import {
  createModule,
  getModules,
  updateModule,
  deleteModule
} from "../controllers/module.controller.js";

const router = express.Router();

router.post("/", protect, createModule);
router.get("/", protect, getModules);
router.put("/:id", protect, updateModule);
router.delete("/:id", protect, deleteModule);

export default router;
