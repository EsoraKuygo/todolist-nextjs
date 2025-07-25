export default class Todo {
  private id: bigint;
  private tache: string;

  public constructor(id: bigint, tache: string) {
    this.id = id;
    this.tache = tache;
  }

  public getId() {
    return this.id;
  }

  public setId(id: bigint) {
    this.id = id;
  }

  public getTache() {
    return this.tache;
  }

  public setTache(tache: string) {
    this.tache = tache;
  }

  public toString(): string {
    return `Todo{id=${this.id}, tache='${this.tache}'}`;
  } 
  public equals(other: Todo): boolean {
    if (!(other instanceof Todo)) {
      return false;
    }
    return this.id === other.id && this.tache === other.tache;
  }
  public clone(): Todo {
    return new Todo(this.id, this.tache);
  }
  public static fromDTO(dto: ToDoDTO): Todo {
    return new Todo(BigInt(dto.id), dto.tache);
  } 
  public toDTO(): ToDoDTO {
    return {
      id: this.id.toString(),
      tache: this.tache,
    };
  }
  public static fromDTODataBase(dto: ToDoDTODataBase): Todo {
    return new Todo(dto.id, dto.tache);
  }
  public toDTODataBase(): ToDoDTODataBase {
    return {
      id: this.id,
      tache: this.tache,
    };
  }
  public static fromDataBaseEntity(entity: TodoEntity): Todo {
    return new Todo(entity.id, entity.tache);
  }
  public toDataBaseEntity(): TodoEntity {
    return new TodoEntity({ id: this.id, tache: this.tache });
  }
  public static fromDataBaseDTO(dto: ToDoDTODataBase): Todo {
    return new Todo(dto.id, dto.tache);
  }
  public toDataBaseDTO(): ToDoDTODataBase {
    return {
      id: this.id,
      tache: this.tache,
    };
  }
}
