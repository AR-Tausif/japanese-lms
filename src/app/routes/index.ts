import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/users/users.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  }, 
  {
    path: "/users",
    route: userRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
