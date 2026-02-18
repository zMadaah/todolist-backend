import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes); // 🔥 AQUI TEM QUE SER UM ROUTER

app.get("/", (_, res) => {
  res.send("API ToDo List rodando 🚀");
});

app.listen(5555, () => {
  console.log("Servidor rodando na porta 5555");
});
