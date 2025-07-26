const CategoryMenuFilters = () => {
  return (
    <div className="my-8">
      <h3>Actions</h3>
      <div className='filters'>
        {['Newest', 'Most Popular', 'Trending', 'Oldest'].map((category) => (
            <label key={category} style={{ display: 'block', marginBottom: '8px' }}>
                <input type="checkbox" value={category} className="mr-2" />
                {category}
            </label>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenuFilters