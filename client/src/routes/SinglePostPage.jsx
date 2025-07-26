import { Link } from "react-router";
import AuthorBio from "../components/AuthorBio";
import PostMenuActions from "../components/PostMenuActions";
import ListCategories from "../components/ListCategories";
import SearchBox from "../components/SearchBox";
import CommentBox from "../components/CommentBox";
import Comments from "../components/Comments";

const post = {
  title:
    "Exploring Modern Technology: Innovations, Trends, and the Future of Digital Transformation",
  intro:
    "Discover the latest trends, groundbreaking innovations, and the profound impact of technology on our world with this comprehensive and insightful post. Dive deep into how digital transformation is shaping industries, lifestyles, and the future.",
  thumbnail:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  content: `
    <p>
      Welcome to our latest blog post! In this article, we explore the advancements in modern technology and how they impact our daily lives.
    </p>
    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=650&q=80" alt="Sample" style="max-width:100%;margin:20px 0;border-radius:8px;display: block;margin-left: auto;margin-right: auto;" />
    <p>
      Technology is evolving at a rapid pace, bringing new opportunities and challenges. Stay tuned as we delve deeper into these exciting developments.
    </p>
    <h2>Artificial Intelligence and Machine Learning</h2>
    <p>
      Artificial Intelligence (AI) and Machine Learning (ML) are at the forefront of technological innovation. From self-driving cars to personalized recommendations, AI is transforming the way we interact with digital systems. Businesses are leveraging AI to automate processes, enhance customer experiences, and gain valuable insights from data.
    </p>
    <h2>Internet of Things (IoT)</h2>
    <p>
      The Internet of Things connects everyday devices to the internet, enabling smarter homes, cities, and industries. Smart thermostats, wearable health trackers, and connected vehicles are just a few examples of how IoT is making our lives more convenient and efficient.
    </p>
    <h2>Cloud Computing</h2>
    <p>
      Cloud computing has revolutionized how organizations store, manage, and process data. With scalable infrastructure and on-demand resources, businesses can innovate faster and reduce operational costs. Cloud services also support remote work and global collaboration.
    </p>
    <h2>Cybersecurity</h2>
    <p>
      As technology advances, so do the threats. Cybersecurity is a critical concern for individuals and organizations alike. Protecting sensitive data, securing networks, and educating users about online risks are essential steps in maintaining digital safety.
    </p>
    <h2>The Future of Digital Transformation</h2>
    <p>
      The future holds exciting possibilities as emerging technologies like quantum computing, blockchain, and augmented reality continue to develop. Embracing digital transformation will be key for businesses and individuals to stay competitive and thrive in an ever-changing landscape.
    </p>
    <blockquote>
      "The best way to predict the future is to invent it." – Alan Kay
    </blockquote>
    <p>
      Thank you for joining us on this journey through modern technology. Stay tuned for more insights and updates on the latest trends shaping our digital world.
    </p>
  `,
  author: {
    name: "John Doe",
    link: "/author/john-doe",
  },
  date: "2024-06-01",
  publishedTime: "June 1, 2024",
  category: {
    title: "Tech",
    link: "/category/tech",
  },
};

const SinglePostPage = () => {
  return (
    <div className="singlePost">
      <div className="post-header flex gap-8 py-4">
        <div className="post-header-left w-full lg:w-3/5">
          <h1>{post.title}</h1>
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
          <div className="post-intro">{post.intro}</div>
        </div>
        <div className="post-header-left hidden lg:block lg:w-2/5">
          <Link to={post.link}>
            <img
              src={post.thumbnail}
              className="w-full object-cover object-center border-white rounded-2xl"
            />
          </Link>
        </div>
      </div>
      <div className="flex gap-8 ">
        <div className="post-body flex flex-col gap-8 mt-4 mb-8 w-full lg:w-4/5">
          <div
            className="post-content w-full text-justify"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          <div className="post-comments">
            <CommentBox title="Comments" />
            <Comments />
          </div>
        </div>
        <div className="post-sidebar hidden md:flex md:flex-col lg:w-1/5 h-max sticky top-4 gap-4">
          {/* Author bio */}
          <AuthorBio />
          {/* Post actions */}
          <PostMenuActions />
          {/* Categories */}
          <ListCategories />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
