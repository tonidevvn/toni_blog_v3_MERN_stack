import { Link } from 'react-router'

const categories = [
  { name: 'All Posts', link: '/posts' },
  { name: 'Web Design', link: '/posts?cat=web-design' },
  { name: 'Development', link: '/posts?cat=development' },
  { name: 'Databases', link: '/posts?cat=databases' },
  { name: 'Search Engines', link: '/posts?cat=seo' },
  { name: 'Marketing', link: '/posts?cat=marketing' }
]

const ListCategories = () => {
  return (
    <div className='flex flex-col'>
      <h3>Categories</h3>
      {/* links */}
      <div className='flex flex-col flex-wrap gap-4'>
        {categories.map((cat, index) => (
          <Link to={cat.link} key={`category-${index}`} className='hover:text-blue-800 underline'>
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ListCategories
