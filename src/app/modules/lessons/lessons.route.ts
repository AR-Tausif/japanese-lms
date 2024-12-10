import express from "express";
import { USER_ROLE_ENUM } from "../users/users.interface";
import auth from "../../middlewares/auth";
import { LessonController } from "./lessons.controller";
import validateRequest from "../../middlewares/validateRequest";
import { lessonValidations } from "./lessons.validation";

const router = express.Router()

// WITH ADMIN CREDENTIALS
router.post("/", validateRequest(lessonValidations.lessonSchema), auth(USER_ROLE_ENUM.ADMIN), LessonController.createNewLesson) // create a new lesson
router.get("/", auth(USER_ROLE_ENUM.ADMIN), LessonController.getAllLessons) // get all availabe lessons
router.put("/:lessonId", validateRequest(lessonValidations.updateLessonSchema), auth(USER_ROLE_ENUM.ADMIN), LessonController.updateSingleLessonById) // update single lesson by _id
router.delete("/:lessonId", auth(USER_ROLE_ENUM.ADMIN), LessonController.deleteSingleLessonById) // delete single lesson by _id

// WITH USER CREDENTIALS
router.get("/:lessonId", auth(USER_ROLE_ENUM.ADMIN, USER_ROLE_ENUM.USER), LessonController.getSingleLessonById) // get single lesson by _id

export const lessonRoutes = router;