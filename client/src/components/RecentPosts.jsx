import { Link } from "react-router";
import { IKImage } from "./IKImage";

const posts = [
  {
    title: "How to Build a REST API with Node.js and Express",
    publishedTime: "2 days ago",
    category: { title: "Backend", link: "/backend" },
    link: "/how-to-build-a-rest-api-with-node-js-and-express",
    thumbnail: "/postThumb.jpeg",
    author: { name: "Toni Pham", link: "/author/toni-pham" },
    description:
      "Learn how to create a robust REST API using Node.js and Express, covering routing, middleware, and best practices.",
  },
  {
    title: "Understanding React Hooks: A Beginner's Guide",
    publishedTime: "4 days ago",
    category: { title: "React", link: "/react" },
    link: "/understanding-react-hooks:-a-beginners-guide",
    thumbnail: "/postThumb.jpeg",
    author: { name: "Toni Pham", link: "/author/toni-pham" },
    description:
      "A simple introduction to React Hooks, explaining useState, useEffect, and how to use them in your projects.",
  },
  {
    title: "Exploring the Future of UI/UX Design Trends",
    publishedTime: "5 hours ago",
    category: { title: "UI/UX", link: "/ui-ux" },
    link: "/exploring-the-future-of-ui/ux-design-trends",
    thumbnail: "/postThumb.jpeg",
    author: { name: "Toni Pham", link: "/author/toni-pham" },
    description:
      "Discover the latest UI/UX design trends and how they are shaping the future of digital experiences.",
  },
  {
    title: "Mastering Responsive Layouts with Flexbox and Grid",
    publishedTime: "1 week ago",
    category: { title: "Frontend", link: "/frontend" },
    link: "/mastering-responsive-layouts-with-flexbox-and-grid",
    thumbnail: "/postThumb.jpeg",
    author: { name: "Toni Pham", link: "/author/toni-pham" },
    description:
      "A practical guide to building responsive layouts using CSS Flexbox and Grid for modern web development.",
  },
  {
    title: "10 Tips for Writing Clean JavaScript Code",
    publishedTime: "3 days ago",
    category: { title: "JavaScript", link: "/javascript" },
    link: "/10-tips-for-writing-clean-javascript-code",
    thumbnail: "/postThumb.jpeg",
    author: { name: "Toni Pham", link: "/author/toni-pham" },
    description:
      "Improve your JavaScript code quality with these 10 essential tips for writing clean and maintainable code.",
  },
];

const RecentPosts = ({ title }) => {
  return (
    <div className="recent-posts">
      {title ? <h1>{title}</h1> : ""}
      <div className="flex flex-col w-full gap-8">
        {posts.map((post, index) => (
          <div
            className="recent-post flex w-full lg:h-1/3 gap-6 justify-between"
            key={`recentPost-${index}`}
          >
            <div className="thumbnail w-1/3 max-w-[360px]">
              <Link to={post.link}>
                <IKImage
                  src={post.thumbnail}
                  w={360}
                  className="w-full h-auto aspect-video object-cover  object-center border-white rounded-2xl"
                />
              </Link>
            </div>
            <div className="post-meta-box flex flex-col w-2/3 gap-1">
              <h3 className="post-title font-semibold text-lg md:text-2xl lg:text-2xl xl:text-2xl text-gray-800">
                <Link to={post.link}>{post.title}</Link>
              </h3>
              <div className="post-meta hidden lg:flex gap-2 items-center mb-2 text-base sm:text-md lg:text-base">
                <span>Written by</span>
                <Link to={post.author.link} className="text-blue-800">
                  {post.author.name}
                </Link>
                <span>on</span>
                <Link to={post.category.link} className="text-blue-800">
                  {post.category.title}
                </Link>
                <span className="text-gray-500">{post.publishedTime}</span>
              </div>
              <div className="post-description text-base lg:text-lg">
                {post.description}
              </div>
              <div className="post-read-more">
                <Link to={post.link} className="text-blue-800 underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
