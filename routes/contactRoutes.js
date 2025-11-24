import express from "express";
import {
  createMessage,
  getMessages,
  getMessage,
  deleteMessage,
} from "../controllers/contactController.js";

const router = express.Router();

// Public Route
router.post("/", createMessage);

// Admin Routes
router.get("/", getMessages);
router.get("/:id", getMessage);
router.delete("/:id", deleteMessage);

export default router;
