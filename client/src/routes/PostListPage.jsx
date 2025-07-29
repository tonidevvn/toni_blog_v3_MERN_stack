import PostList from '../components/PostList'
import ListCategories from '../components/ListCategories'
import CategoryMenuFilters from '../components/CategoryMenuFilters'
import SearchBox from '../components/SearchBox'
import { useEffect, useState } from 'react'
import useWindowState from '../hooks/useWindowState'

const PostListPage = () => {
  const [open, setOpen] = useState(false)
  const [windowWidth] = useWindowState()

  useEffect(() => {
    if (windowWidth > 768 && open) setOpen(false)
  }, [windowWidth])

  return (
    <div className='PostList'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='m-0'>Development Blog</h2>
        <button
          className='md:hidden bg-white border-blue-800 border-1 rounded-2xl p-2 my-2 shadow-md flex items-center gap-2'
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5'
            />
          </svg>

          {open ? 'Close' : 'Filter or Search'}
        </button>
      </div>
      <div className={`flex flex-col md:flex-row gap-5 ${open ? 'flex-col-reverse' : ''}`}>
        <div className='posts w-full lg:w-4/5'>
          <PostList />
        </div>
        {/* Side bar */}
        <div className={open ? `flex flex-col` : `hidden md:flex md:flex-col lg:w-1/5 h-max sticky top-5`}>
          {/* Search */}
          <SearchBox title='Search' />
          {/* Posts filter */}
          <CategoryMenuFilters />
          {/* Categories */}
          <ListCategories />
        </div>
      </div>
    </div>
  )
}

export default PostListPage
