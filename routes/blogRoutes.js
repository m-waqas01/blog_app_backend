import express from "express";
import {
  createBlog,
  updateBlog,
  getBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getBlog);
router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;
