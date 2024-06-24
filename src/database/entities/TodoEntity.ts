import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "todo", schema: "public" })
export class TodoEntity {
  @PrimaryColumn({ type: "bigint", name: "id", nullable: false })
  id!: bigint;

  @Column({ type: "varchar", name: "tache", nullable: false })
  tache!: string;

  constructor(todo?: { id: bigint; tache: string }) {
    if (todo) {
      this.id = todo.id;
      this.tache = todo.tache;
    }
  }
}
