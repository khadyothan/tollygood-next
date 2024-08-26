import { connectToDB } from "@utils/database";

export const DELETE = async (req, res) => {
  const { id } = await req.json();
  try {
    const pool = await connectToDB();
    const client = await pool.connect();
    const query = `DELETE from reviews WHERE id = $1`;
    const values = [id];
    await client.query(query, values);
    client.release();
    return new Response(
      JSON.stringify({ message: "Review deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};
