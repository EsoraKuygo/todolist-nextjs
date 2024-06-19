import { DataSourceOptions } from "typeorm";

const portDBContainer: number = parseInt(process.env.DB_PORT || "5432"); /* Port de la base de données. */
const isDebug: boolean = process.env.DEBUG_TYPEORM === "true"; /* Détermine si le mode debug est activé. */

const isDevelopment: boolean =
  process.env.NODE_ENV === "development"; /* Détermine si l'environnement est en mode développement. */

/**
 * Options de configuration pour la source de données interne.
 */
const dataSourceOptions: DataSourceOptions = {
  type: "postgres" /* Type de la base de données. */,
  host: process.env.DB_HOST /* Host de la base de données. */,
  port: portDBContainer /* Port de la base de données. */,
  username: process.env.DB_USER /* Nom d'utilisateur pour la connexion. */,
  password: process.env.DB_PASS /* Mot de passe pour la connexion. */,
  database: process.env.DB_NAME /* Nom de la base de données. */,
  synchronize: isDevelopment /* Synchronisation du schéma. */,
  logging: isDebug /* Active les logs en mode debug. */,

  /*  Entités à utiliser par TypeORM. */
  entities: [],

  migrations: ["src/migrations/**/*.ts"] /* Chemin vers les fichiers de migration. */,
  subscribers: ["src/subscribers/**/*.ts"] /* Chemin vers les fichiers de subscriber. */,
};

export default dataSourceOptions;
