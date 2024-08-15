import Image from "next/image";
import Link from "next/link";

const ReviewCard = ({ news }) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={news.imageURL}
        width={100}
        height={100}
        className="rounded-md object-cover"
        alt="Review Image"
      />
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          {news.reviewTitle}
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          {news.review.substring(0, 100)}...
        </p>
        <Link href={`/news/${news.id}`}>
          <button className="outline_btn mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
