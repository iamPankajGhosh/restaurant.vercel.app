import { Router } from "express";
import { signUpUser, signInUser } from "../controllers/user.controllers.js";

const router = Router();

router.route("/sign-up").post(signUpUser);
router.route("/sign-in").post(signInUser);

export default router;
