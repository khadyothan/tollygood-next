import Image from "next/image";
import Link from "next/link";

const ReviewCard = ({ review }) => {
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
          {review.review_content.substring(0, 100)}...
        </p>
        <Link href={`/news/${review.id}`}>
          <button className="outline_btn mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
