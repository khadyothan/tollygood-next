import pg from "pg";

let isConnected = false;
let client;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("Database is already connected");
  }

  try {
    client = new pg.Client({
      user: "postgres",
      host: "localhost",
      database: "tollygood",
      password: "khadyulocaldatabase",
      port: 5432,
    });
    await client.connect();
    isConnected = true;
    console.log("PostgreSQL connected");
    return client;
  } catch (error) {
    console.log(error);
  }
};
