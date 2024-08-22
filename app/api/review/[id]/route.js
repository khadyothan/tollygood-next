import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    const pool = await connectToDB();
    const client = await pool.connect();
    if (!id) {
      return new Response(
        JSON.stringify({ error: "ID parameter is required" }),
        {
          status: 400,
        }
      );
    }
    const query = `SELECT * FROM reviews WHERE id = $1`;
    const values = [id];
    const { rows } = await client.query(query, values);
    client.release();
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: "Review not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(rows[0]), { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
