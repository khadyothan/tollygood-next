import { connectToDB } from "@utils/database";

export const PATCH = async (req, res) => {
  const { id, movieTitle, reviewTitle, reviewContent, imageURL } =
    await req.json();
  try {
    const pool = await connectToDB();
    const client = await pool.connect();
    const query = `UPDATE reviews
    SET movie_title = $1,
    review_title = $2,
    review_content = $3,
    imageurl = $4
    WHERE id = $5`;
    const values = [movieTitle, reviewTitle, reviewContent, imageURL, id];
    await client.query(query, values);
    client.release();
    return new Response(
      JSON.stringify({ message: "Review updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};
