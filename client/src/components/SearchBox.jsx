const SearchBox = ({ title = "" }) => {
  return (
    <div>
      {title.trim().length > 0 ? <h3>{title}</h3> : ""}
      <div
        className={
          title.trim().length > 0
            ? "bg-white rounded-full flex items-center align-middle p-1 px-2 gap-2 text-gray-500"
            : "bg-[#e6e6ff] rounded-full flex items-center align-middle p-1 px-2 gap-2 text-gray-500"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          width='18'
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          className="bg-transparent border-0 focus:outline-none"
          placeholder="Search a post..."
        ></input>
      </div>
    </div>
  );
};

export default SearchBox;
