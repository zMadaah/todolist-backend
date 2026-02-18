import { Router } from "express";
import {
  createTask,
  listTasks,
  toggleTask,
  deleteTask
} from "../controllers/task.controllers";

const router = Router();

router.post("/", createTask);
router.get("/", listTasks);
router.patch("/:id", toggleTask);
router.delete("/:id", deleteTask);

export default router;
