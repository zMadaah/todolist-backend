import { prisma } from "../lib/prisma";

export class TaskService {
  
  async create(data: { title: string; description?: string }) {
    return prisma.task.create({ data });
  }

  
  async findAll() {
    return prisma.task.findMany({
      orderBy: { createdAt: "desc" }
    });
  }

  
  async update(id: string, data: any) {
    return prisma.task.update({
      where: { id },
      data
    });
  }

  
  async check(id: string, completed: boolean) {
    return prisma.task.update({
      where: { id },
      data: { completed }
    });
  }

  
  async delete(id: string) {
    return prisma.task.delete({
      where: { id }
    });
  }
}
