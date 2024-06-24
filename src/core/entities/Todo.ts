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
}
