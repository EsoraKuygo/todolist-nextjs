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

import { ToDoDTO, ToDoDTODataBase } from "@/types/todo";
export function toCoreDTO(dataBaseDTO: ToDoDTODataBase): ToDoDTO {
  return {
    id: dataBaseDTO.id.toString(),
    tache: dataBaseDTO.tache,
  };
}
export function toDataBaseDTO(coreDTO: ToDoDTO): ToDoDTODataBase {
  return {
    id: BigInt(coreDTO.id),
    tache: coreDTO.tache,
  };
}
export function toCoreDTOList(dataBaseDTOList: ToDoDTODataBase[]): ToDoDTO[] {
  return dataBaseDTOList.map(toCoreDTO);
}
export function toDataBaseDTOList(coreDTOList: ToDoDTO[]): ToDoDTOData
Base[] {
  return coreDTOList.map(toDataBaseDTO);
}
export function toCoreEntityList(dataBaseEntityList: TodoEntity[]): Todo[] {
  return dataBaseEntityList.map((entity) => TodoConverter.toCoreEntity(entity));
}
export function toDataBaseEntityList(coreEntityList: Todo[]): TodoEntity[] {
  return coreEntityList.map((entity) => TodoConverter.toDataBaseEntity(entity));
}
export function toCoreDTOFromEntity(dataBaseEntity: TodoEntity): ToDoDTO {
  const coreEntity = TodoConverter.toCoreEntity(dataBaseEntity);
  return {
    id: coreEntity.getId().toString(),
    tache: coreEntity.getTache(),
  };
}