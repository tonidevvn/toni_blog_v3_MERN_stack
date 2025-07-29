import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import PostCard from './PostCard'

const posts = [
  {
    title: 'How to Build a REST API with Node.js and Express',
    publishedTime: '2 days ago',
    category: { title: 'Backend', link: '/backend' },
    link: '/how-to-build-a-rest-api-with-node-js-and-express',
    thumbnail: '/postThumb.jpeg',
    author: { name: 'Toni Pham', link: '/author/toni-pham' },
    description:
      'Learn how to create a robust REST API using Node.js and Express, covering routing, middleware, and best practices.'
  },
  {
    title: "Understanding React Hooks: A Beginner's Guide",
    publishedTime: '4 days ago',
    category: { title: 'React', link: '/react' },
    link: '/understanding-react-hooks:-a-beginners-guide',
    thumbnail: '/postThumb.jpeg',
    author: { name: 'Toni Pham', link: '/author/toni-pham' },
    description:
      'A simple introduction to React Hooks, explaining useState, useEffect, and how to use them in your projects.'
  },
  {
    title: 'Exploring the Future of UI/UX Design Trends',
    publishedTime: '5 hours ago',
    category: { title: 'UI/UX', link: '/ui-ux' },
    link: '/exploring-the-future-of-ui/ux-design-trends',
    thumbnail: '/postThumb.jpeg',
    author: { name: 'Toni Pham', link: '/author/toni-pham' },
    description: 'Discover the latest UI/UX design trends and how they are shaping the future of digital experiences.'
  },
  {
    title: 'Mastering Responsive Layouts with Flexbox and Grid',
    publishedTime: '1 week ago',
    category: { title: 'Frontend', link: '/frontend' },
    link: '/mastering-responsive-layouts-with-flexbox-and-grid',
    thumbnail: '/postThumb.jpeg',
    author: { name: 'Toni Pham', link: '/author/toni-pham' },
    description:
      'A practical guide to building responsive layouts using CSS Flexbox and Grid for modern web development.'
  },
  {
    title: '10 Tips for Writing Clean JavaScript Code',
    publishedTime: '3 days ago',
    category: { title: 'JavaScript', link: '/javascript' },
    link: '/10-tips-for-writing-clean-javascript-code',
    thumbnail: '/postThumb.jpeg',
    author: { name: 'Toni Pham', link: '/author/toni-pham' },
    description:
      'Improve your JavaScript code quality with these 10 essential tips for writing clean and maintainable code.'
  }
]

const API_END_POINT = import.meta.env.VITE_API_END_POINT

const fetchPosts = async () => {
  const res = await axios.get(`${API_END_POINT}/posts/`)
  console.log('🚀 ~ fetchPosts ~ res:', res.data)
  return res.data
}


const PostList = ({ title }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchPosts()
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='recent-posts'>
      {title ? <h1>{title}</h1> : ''}
      <div className='flex flex-col w-full gap-8'>
        {data && data.length > 0 ? (
          data.map((dataPost, idx) => {
    return <PostCard key={idx} dataPost={dataPost} />
})
        ) : (
          <span>No posts be found!</span>
        )}
      </div>
    </div>
  )
}

export default PostList
