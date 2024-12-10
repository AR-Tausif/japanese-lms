import express from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE_ENUM } from "./users.interface";
import { UserController } from "./users.controller";

const router = express.Router()

// WITH ADMIN CREDENTIALS
router.get("/", auth(USER_ROLE_ENUM.ADMIN), UserController.getAllUsersFromDB) // get all users from db by just authenticate admin
router.patch("/:promotingUserId/promote", auth(USER_ROLE_ENUM.ADMIN), UserController.promoteUserRole) // promoting user to admin
router.patch("/:demoingUserId/demote", auth(USER_ROLE_ENUM.ADMIN), UserController.demoteUserRole) // demoting user to admin

export const userRoutes = router;