import { Pool } from "pg";

let pool;

export const connectToDB = async () => {
  if (!pool) {
    pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "tollygood",
      password: "khadyulocaldatabase",
      port: 5432,
    });

    // Test the connection to ensure it's working
    try {
      await pool.query("SELECT NOW()");
      console.log("PostgreSQL connected");
    } catch (error) {
      console.error("Failed to connect to PostgreSQL:", error);
      throw error;
    }
  }

  return pool;
};
