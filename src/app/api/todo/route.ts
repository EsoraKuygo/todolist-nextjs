import TodoConverter from "@/core/TodoConverter";
import Todo from "@/core/entities/Todo";
import Connection from "@/database/Connection";
import TodoRepository from "@/database/repository/TodoRepository";
import { z } from "zod";

export async function GET(): Promise<Response> {
  const connexion = await Connection.getInstance();

  const repo = new TodoRepository(connexion);
  const todos = await repo.findall();
  return new Response(JSON.stringify(todos.map((todo) => TodoConverter.toDTO(todo))));
}

const deleteSchema = z
  .object({
    id: z.string(),
  })
  .transform((data) => BigInt(data.id));

export async function DELETE(req: Request): Promise<Response> {
  let id;

  try {
    id = deleteSchema.parse(await req.json());
  } catch (e) {
    return new Response(JSON.stringify({ error: "invalid data" }));
  }

  const connexion = await Connection.getInstance();
  const repo = new TodoRepository(connexion);
  await repo.supprTodo(id);
  return new Response("ok");
}
const patchSchema = z.object({
  id: z.string().or(z.number()),
  tache: z.string().min(1, "Task cannot be empty"),
});

export async function PATCH(req: Request): Promise<Response> {
  let data;
  try {
    data = await req.json();
    patchSchema.parse(data);
  } catch (e) {
    return new Response(JSON.stringify({ error: "invalid data" }));
  }
  if (typeof data.id === "string") {
    data.id = BigInt(data.id);
  } else if (typeof data.id === "number") {
    data.id = BigInt(data.id);
  }
  if (data.id <= 0) {
    return new Response(JSON.stringify({ error: "invalid id" }));
  }
  if (data.tache.trim() === "") {
    return new Response(JSON.stringify({ error: "Task cannot be empty" }));
  }
  if (data.tache.length > 255) {
    return new Response(JSON.stringify({ error: "Task is too long" }));
  }
  if (data.tache.length < 3) {
    return new Response(JSON.stringify({ error: "Task is too short" }));
  }
  if (data.tache.includes("`") || data.tache.includes("'") || data.tache.includes('"')) {
    return new Response(JSON.stringify({ error: "Task contains invalid characters" }));
  }
  if (data.tache.includes("<") || data.tache.includes(">") || data.tache.includes("&")) {
    return new Response(JSON.stringify({ error: "Task contains invalid HTML characters" }));
  }
  if (data.tache.includes("script") || data.tache.includes("javascript")) {
    return new Response(JSON.stringify({ error: "Task contains invalid script characters" }));
  }
  if (data.tache.includes("SELECT") || data.tache.includes("INSERT") || data.tache.includes("UPDATE") || data.tache.includes("DELETE")) {
    return new Response(JSON.stringify({ error: "Task contains invalid SQL characters" }));
  }
  if (data.tache.includes("DROP") || data.tache.includes("CREATE") || data.tache.includes("ALTER")) {
    return new Response(JSON.stringify({ error: "Task contains invalid SQL characters" }));
  }
  if (data.tache.includes("TRUNCATE") || data.tache.includes("GRANT") || data.tache.includes("REVOKE")) {
    return new Response(JSON.stringify({ error: "Task contains invalid SQL characters" }));
  }

  const connexion = await Connection.getInstance();
  const repo = new TodoRepository(connexion);
  const todo = await repo.modifTodo(data.id, data.tache);

  const updatedTodoDTO = TodoConverter.toDTO(todo);
  return new Response(JSON.stringify(updatedTodoDTO));
}

const postSchema = z.object({
  tache: z.string().min(1, "Task cannot be empty"),
});

export async function POST(req: Request): Promise<Response> {
  let data = await req.json();
  try {
    postSchema.parse(data);
  } catch (e) {
    return new Response("invalid post");
  }

  const { tache } = data;
  const id = BigInt(Date.now());
  const newTodo: Todo = new Todo(id, tache);

  const connexion = await Connection.getInstance();
  const repo = new TodoRepository(connexion);
  await repo.saveTodo(newTodo);

  const newTodoDTO = TodoConverter.toDTO(newTodo);

  return new Response(JSON.stringify(newTodoDTO));
}
