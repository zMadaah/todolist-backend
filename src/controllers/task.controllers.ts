import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

const taskService = new TaskService();


export async function createTask(req: Request, res: Response) {
  const { title, description } = req.body;

  const task = await taskService.create({
    title,
    description
  });

  return res.status(201).json(task);
}


export async function listTasks(req: Request, res: Response) {
  const tasks = await taskService.findAll();

  return res.json(tasks);
}


export async function toggleTask(req: Request, res: Response) {
  const { id } = req.params;
  const { completed } = req.body;

  const task = await taskService.check(id, completed);

  return res.json(task);
}


export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;

  await taskService.delete(id);

  return res.status(204).send();
}
