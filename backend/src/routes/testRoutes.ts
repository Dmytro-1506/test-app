import { Router } from "express";
import { test, getMe, greeting, getUser, login } from "../controllers/testController";

const router = Router();

router.get("/", test);

router.get("/me", getMe);

router.get("/hello", greeting);

router.get("/user", getUser);

router.get("/user/:id", getUser);

router.get("/login", login)


export default router;