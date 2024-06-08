import { Router } from "express";
import {
  addToCart,
  loginUser,
  registerUser,
  getCartItems,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/add-to-cart").post(addToCart);
router.route("/cart-items").get(getCartItems);

export default router;
