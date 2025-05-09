import express, { Router } from "express";
import { addactivity, createactivity, getallactivity } from "../controller/activity.controller.js";
const router=express.Router();
router.route("/createactivity").post(createactivity)
router.route("/getallactivity").get(getallactivity)
router.route("/addactivity").post(addactivity)
export default router;