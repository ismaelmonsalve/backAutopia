import mysql from "mysql2/promise";
import config from "../config.js";

const connection = mysql.createConnection({
  user: config.dbUser,
  password: config.dbPassword,
  host: config.dbHost,
  port: config.dbPort,
  database: config.dbName,
});

const createConnection = () => {
    return connection;
};

export { createConnection };