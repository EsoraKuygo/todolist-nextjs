import Todo from "@/core/entities/Todo";
import { TodoEntity } from "../entities/TodoEntity";

export default class TodoConverter {
  public static toDataBaseEntity(coreEntity: Todo): TodoEntity {
    return new TodoEntity({ id: coreEntity.getId(), tache: coreEntity.getTache() });
  }

  public static toCoreEntity(dataBaseEntity: TodoEntity): Todo {
    return new Todo(dataBaseEntity.id, dataBaseEntity.tache);
  }

  public static toDTODataBase(coreDTO: ToDoDTO): ToDoDTODataBase {
    return {
      id: BigInt(coreDTO.id),
      tache: coreDTO.tache,
    };
  }
}
