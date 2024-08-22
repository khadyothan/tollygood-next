import Image from "next/image";
import Link from "next/link";

const ReviewCard = ({ review }) => {
  // async function handleEdit(id) {
  //   await fetch("/api/review/edit", {
  //     method: "POST",
  //   });
  // }
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
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          {review.review_title}
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          {review.review_content.substring(0, 50)}...
        </p>
        <p className="text-xs mt-3">Published on {review.created_at}</p>
        <div className="flex justify-between">
          <Link href={`/reviews/${review.id}`}>
            <button className="outline_btn px-4 mt-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              Read
            </button>
          </Link>
          <Link href={`/edit-review/${review.id}`}>
            <button>Edit</button>
          </Link>

          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
