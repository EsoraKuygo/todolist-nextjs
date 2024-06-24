import Todo from "@/core/entities/Todo";
import type { Repository } from "typeorm";
import type Connection from "../Connection";
import TodoConverter from "../converter/TodoConverter";
import { TodoEntity } from "../entities/TodoEntity";

export default class TodoRepository {
  private repository: Repository<TodoEntity>;

  constructor(connection: Connection) {
    const dbConnection = connection.getConnection();
    const repository = dbConnection.getRepository(TodoEntity);
    this.repository = repository;
  }

  /**
   * fonction sauvegarde tache
   * @param todo : interface d'une taches
   *
   */
  async saveTodo(todo: Todo) {
    // instancier entity
    const todoEntity = TodoConverter.toDataBaseEntity(todo);
    await this.repository.save(todoEntity);
  }

  async findall(): Promise<Todo[]> {
    const result = await this.repository.find();
    return result.map((todoEntity) => TodoConverter.toCoreEntity(todoEntity));
  }

  async findby(argument: Partial<ToDoDTODataBase>): Promise<Todo[]> {
    // chercher les ligne la ou l'id est egal a "argument"
    const result = await this.repository.find({
      where: {
        ...argument,
      },
    });
    // mettre en forme
    return result.map((todoEntity) => TodoConverter.toCoreEntity(todoEntity));
  }

  async supprTodo(id: bigint): Promise<void> {
    const result = await this.repository.delete({
      id,
    });
  }

  async modifTodo(id: bigint, tache: string): Promise<Todo> {
    const todoEntity = await this.repository.findOneBy({ id });
    if (todoEntity) {
      todoEntity.tache = tache;
      const todoUpdated = await this.repository.save(todoEntity);
      return TodoConverter.toCoreEntity(todoUpdated);
    }
    throw new Error("todo inexistant in db");
  }
}
