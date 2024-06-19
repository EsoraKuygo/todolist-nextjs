import { DataSource } from "typeorm";
import dataSourceOptions from "./DataSourceOptions";

export default class Connection {
  private static instance: Connection | null = null;
  private dataSource: DataSource = new DataSource(dataSourceOptions);

  private constructor() {}

  static async getInstance() {
    if (this.instance == null) this.instance = new Connection();
    await this.instance.dataSource.initialize();
    return this.instance;
  }

  getConnection() {
    return this.dataSource;
  }
}
