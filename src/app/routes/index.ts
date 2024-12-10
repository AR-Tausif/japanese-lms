import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/users/users.route";
import { lessonRoutes } from "../modules/lessons/lessons.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  }, 
  {
    path: "/users",
    route: userRoutes
  },
  {
    path: "/lessons",
    route: lessonRoutes
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
