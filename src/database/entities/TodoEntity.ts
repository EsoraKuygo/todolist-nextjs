import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TodoEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  tache: string;

  constructor(todo: ToDo) {
    this.id = todo.id;
    this.tache = todo.tache;
  }
}
