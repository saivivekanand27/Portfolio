import express from "express";
import { sendMessage } from "../controllers/contactController.js";

const router = express.Router();

// GET route (so browser won't show 404)
router.get("/", (req, res) => {
  res.send("Contact API Working ✅");
});

// POST route
router.post("/", sendMessage);

export default router;