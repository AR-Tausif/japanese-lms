import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { RoomRoutes } from "../modules/Rooms/rooms.route";
import { SlotRoutes } from "../modules/Slots/slots.route";
import { bookingsRoutes } from "../modules/Booking/bookings.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
