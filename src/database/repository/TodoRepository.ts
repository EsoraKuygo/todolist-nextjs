import type { Repository } from "typeorm";
import type Connection from "../Connection";
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
  async saveTodo(todo: ToDo) {
    // instancier entity
    const todoEntity = new TodoEntity(todo);
    await this.repository.save(todoEntity);
  }

  async findall(): Promise<ToDo[]> {
    const result = await this.repository.find();
    return result.map((todoEntity) => ({
      id: todoEntity.id,
      tache: todoEntity.tache,
    }));
  }

  async findby(argument: Partial<ToDo>): Promise<ToDo[]> {
    // chercher les ligne la ou l'id est egal a "argument"
    const result = await this.repository.find({
      where: {
        ...argument,
      },
    });
    // mettre en forme
    return result.map((todoEntity) => ({
      id: todoEntity.id,
      tache: todoEntity.tache,
    }));
  }

  async supprTodo(id: number): Promise<void> {
    const result = await this.repository.delete({
      id,
    });
  }
}
