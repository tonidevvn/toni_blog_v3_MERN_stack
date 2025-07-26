import { Link } from "react-router";
import { IKImage } from "./IKImage";

const MainPost = {
  title: "How to Build a Modern Blog with React and Node.js",
  publishedTime: "2 days ago",
  category: { title: "Web Development", link: "/web-development" },
  link: "/featured-post-1",
  thumbnail: "/featured1.jpeg",
};

const OtherPosts = [
  {
    title: "10 Essential Web Design Principles for Modern Websites",
    publishedTime: "2 days ago",
    category: { title: "Web Design", link: "/web-design" },
    link: "/featured-post-2",
    thumbnail: "/featured2.jpeg",
  },
  {
    title: "How to Create Stunning Landing Pages That Convert",
    publishedTime: "2 days ago",
    category: { title: "Web Design", link: "/web-design" },
    link: "/featured-post-3",
    thumbnail: "/featured3.jpeg",
  },
  {
    title: "Responsive Design: Best Practices for Every Device",
    publishedTime: "2 days ago",
    category: { title: "Web Design", link: "/web-design" },
    link: "/featured-post-4",
    thumbnail: "/featured4.jpeg",
  },
];

const FeaturedPosts = () => {
  return (
    <div className="featured-posts flex flex-col gap-8 w-full lg:flex-row">
      <div className="first-post flex flex-col w-full lg:w-1/2 gap-2">
        {/* thumbnail */}
        <div className="thumbnail w-full overflow-hidden rounded-3xl">
          <Link to={MainPost.link}>
            <IKImage
              src={MainPost.thumbnail}
              w={980}
              className="w-full max-h-[320px] object-cover object-center border-white"
            />
          </Link>
        </div>
        <div className="post-meta">
          <div className="post-category flex gap-2 items-center mb-2 text-base sm:text-md lg:text-base">
            <h2 className="font-semibold">01.</h2>
            <Link to={MainPost.category.link} className="text-blue-800">
              {MainPost.category.title}
            </Link>
            <span className="text-gray-500">{MainPost.publishedTime}</span>
          </div>
          <h2 className="post-title font-semibold lg:font-bold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-800">
            <Link to={MainPost.link}>{MainPost.title}</Link>
          </h2>
        </div>
      </div>
      <div className="other-posts flex flex-col w-full lg:w-1/2 gap-4">
        {OtherPosts.map((post, index) => (
          <div
            className="other-post flex w-full lg:h-1/3 gap-4 justify-between"
            key={`featuredPost-${index + 1}`}
          >
            <div className="thumbnail w-1/3 max-h-32 md:max-h-36 overflow-hidden rounded-2xl">
              <Link to={post.link}>
                <IKImage
                  src={post.thumbnail}
                  w={320}
                  className="w-full max-h-32 md:max-h-36 object-cover object-center border-white"
                />
              </Link>
            </div>
            <div className="post-meta w-2/3">
              <div className="post-category flex gap-2 items-center mb-2 text-base sm:text-md lg:text-base">
                <h2 className="font-semibold">0{index + 2}.</h2>
                <Link to={post.category.link} className="text-blue-800">
                  {post.category.title}
                </Link>
                <span className="text-gray-500">{post.publishedTime}</span>
              </div>
              <h3 className="post-title font-semibold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-800">
                <Link to={post.link}>{post.title}</Link>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
