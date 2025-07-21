import { Link } from "react-router";


const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 my-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <div className="bg-[#e6e6ff] rounded-full flex items-center align-middle p-1 px-2 gap-2 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input className="bg-transparent border-0 focus:outline-none" placeholder="Search a post..."></input>
      </div>
      {/* <Search /> */}
    </div>
  );
};

export default MainCategories;
