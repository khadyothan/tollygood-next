import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    const pool = await connectToDB();
    const client = await pool.connect(); // Get a client from the pool
    const query = `SELECT * FROM reviews ORDER BY created_at DESC`;
    const { rows } = await client.query(query);
    client.release(); // Release the client back to the pool
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
