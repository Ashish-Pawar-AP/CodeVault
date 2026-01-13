import express from "express";
import {
  register,
  login,
  logout,
  verifyEmail,
  changePassword
} from "../controllers/auth.controller.js";

import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify-email/:token", verifyEmail);
router.put("/change-password", protect, changePassword);



export default router;
