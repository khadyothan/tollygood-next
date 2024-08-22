import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { movieTitle, reviewTitle, reviewContent, imageURL } = await req.json();

  try {
    const pool = await connectToDB();
    const client = await pool.connect();
    const query = `
      INSERT INTO reviews (movie_title, review_title, review_content, imageurl, created_at)
      VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
    `;
    const values = [movieTitle, reviewTitle, reviewContent, imageURL];
    await client.query(query, values);
    client.release();
    return new Response("Review Sucessfully Created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
