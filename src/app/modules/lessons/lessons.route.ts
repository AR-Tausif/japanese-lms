import express from "express";
import { USER_ROLE_ENUM } from "../users/users.interface";
import auth from "../../middlewares/auth";
import { LessonController } from "./lessons.controller";

const router = express.Router()

// WITH ADMIN CREDENTIALS
router.post("/", auth(USER_ROLE_ENUM.ADMIN), LessonController.createNewLesson) // create a new lesson
// router.patch("/", auth(USER_ROLE_ENUM.ADMIN), UserController.demoteUserRole) // get all availabe lessons
// router.patch("/:lessionId", auth(USER_ROLE_ENUM.ADMIN), UserController.promoteUserRole) // get single lesson by _id

export const userRoutes = router;