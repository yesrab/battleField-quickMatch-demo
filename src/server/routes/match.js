import express from "express";
const router = express.Router();
import { quickMatch } from "../controllers/match.js";
router.route("/quickMatch").get(quickMatch);
export default router;
