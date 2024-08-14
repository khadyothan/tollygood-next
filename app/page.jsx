import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover
        <br className="max:hidden" />
        <span className="orange_gradient text-center">
          Movie Reviews & News
        </span>
      </h1>
      <p className="desc text-center">
        Tollygood is a one stop platform for film news and reviews
      </p>
      <Feed />
    </section>
  );
};

export default Home;
