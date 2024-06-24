import Todo from "./entities/Todo";

export default class TodoConverter {
  public static toDTO(todoEntity: Todo): ToDoDTO {
    return {
      id: todoEntity.getId().toString(),
      tache: todoEntity.getTache(),
    };
  }

  public static toEntity(toDoDTO: ToDoDTO): Todo {
    const id = BigInt(toDoDTO.id);
    return new Todo(id, toDoDTO.tache);
  }
}
