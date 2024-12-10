import express from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidations } from "../users/users.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE_ENUM } from "../users/users.interface";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidations.userSchema),
  AuthController.createUser
);
router.post("/login", validateRequest(userValidations.loginSchema), AuthController.loginUser);
router.get("/me", auth(USER_ROLE_ENUM.USER, USER_ROLE_ENUM.ADMIN), AuthController.getCurrentUser); // get current user details

export const AuthRoutes = router;
