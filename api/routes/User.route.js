// here what we gonne to do is use a express router to make this api
import express from "express";
import test from "../controllers/User.controller.js";
const router = express.Router();
router.get("/test", test);
export default router;
