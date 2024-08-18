import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    const client = await connectToDB();
    const query = `SELECT * FROM reviews ORDER BY created_at DESC`;
    const { rows } = await client.query(query);
    client.end();
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
