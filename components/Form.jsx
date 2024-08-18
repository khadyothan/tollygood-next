import Link from "next/link";

const Form = ({ type, review, setReview, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Review</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Movie Title
          </span>
          <input
            type="text"
            className="form_input"
            value={review.movieTitle}
            onChange={(e) =>
              setReview((prev) => ({ ...prev, movieTitle: e.target.value }))
            }
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Review Title
          </span>
          <input
            type="text"
            className="form_input"
            value={review.reviewTitle}
            onChange={(e) =>
              setReview((prev) => ({ ...prev, reviewTitle: e.target.value }))
            }
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Write Review Here
          </span>
          <textarea
            type="text"
            className="form_textarea"
            value={review.reviewContent}
            onChange={(e) =>
              setReview((prev) => ({ ...prev, reviewContent: e.target.value }))
            }
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Image URL
          </span>
          <input
            type="text"
            className="form_input"
            value={review.imageURL}
            onChange={(e) =>
              setReview((prev) => ({ ...prev, imageURL: e.target.value }))
            }
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
