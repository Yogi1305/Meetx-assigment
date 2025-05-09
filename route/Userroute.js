import express from "express";
import { getuseractivity, login, logout, register } from "../controller/user.controller.js";

const router=express.Router();

router.route("/register").post(register);
router.route("/login").get(login)
router.route("/logout").get(logout)
router.route("/getuseractivity").get(getuseractivity);
export default router;