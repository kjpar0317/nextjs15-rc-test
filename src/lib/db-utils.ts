import type { Pool, PoolConnection, QueryOptions } from "mariadb";

import mariadb from "mariadb";

const maria_connection: Pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test",
  multipleStatements: true,
  connectionLimit: 10,
});

export async function mariadb_query(sql: string | QueryOptions, values?: any) {
  let conn: PoolConnection | null = null;

  try {
    conn = await maria_connection.getConnection();
    return conn.query(sql, values);
  } catch (err) {
    console.error("Error Processing Query: ", err);
  } finally {
    if (conn) conn.end();
  }
}
