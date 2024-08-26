import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmDelete) {
      return;
    }
    try {
      const response = await fetch(`/api/review/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      if (response.ok) {
        alert("Review deleted successfully");
        router.push("/reviews");
      } else {
        alert("Failed to delete the review");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={
          review.imageurl ||
          "https://tse2.mm.bing.net/th?id=OIP.OP1RbJ9c_xDOTaN7Tw-NJAAAAA&pid=Api&P=0&h=180"
        }
        width={100}
        height={100}
        className="rounded-md object-cover"
        alt="Review Image"
      />
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800">
          {review.review_title}
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          {review.review_content.substring(0, 50)}...
        </p>
        <p className="text-xs mt-3">Published on {review.created_at}</p>
        <div className="flex justify-between items-center mt-4">
          <Link href={`/reviews/${review.id}`}>
            <button className="px-4 py-2 outline_btn">Read</button>
          </Link>
          <div className="flex gap-3">
            <Link href={`/edit-review/${review.id}`}>
              <button
                className="flex items-center justify-center p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                title="Edit Review"
              >
                <FaEdit size={18} />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(review.id)}
              className="flex items-center justify-center p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
              title="Delete Review"
            >
              <FaTrash size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
