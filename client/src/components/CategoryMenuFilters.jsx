const CategoryMenuFilters = () => {
  return (
    <div className="my-8">
      <h3>Actions</h3>
      <div className="filters">
        {["Newest", "Most Popular", "Trending", "Oldest"].map((category) => (
          <label key={category} className="block mb-2 cursor-pointer">
            <input
              type="checkbox"
              value={category}
              className="mr-2 cursor-pointer"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenuFilters