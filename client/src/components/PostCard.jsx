import { Link } from "react-router"

const PostCard = ({ dataPost }) => {
  // Parse attributes from data key
  const { slug, title, coverImage, category = '', description, createdAt } = dataPost || {}
  return (
    <div className='recent-post flex w-full lg:h-1/3 gap-6 justify-between'>
      <div className='thumbnail w-1/3 max-w-[360px]'>
        <Link to={slug}>
          <img
            src={coverImage}
            w={360}
            className='w-full h-auto aspect-video object-cover  object-center border-white rounded-2xl'
          />
        </Link>
      </div>
      <div className='post-meta-box flex flex-col w-2/3 gap-1'>
        <h3 className='post-title font-semibold text-lg md:text-2xl lg:text-2xl xl:text-2xl text-gray-800'>
          <Link to={slug}>{title}</Link>
        </h3>
        <div className='post-meta hidden lg:flex gap-2 items-center mb-2 text-base sm:text-md lg:text-base'>
          <span>Written by</span>
          <Link to={'/hello'} className='text-blue-800'>
            {'Author name'}
          </Link>
          <span>on</span>
          <Link to={category} className='text-blue-800'>
            {category}
          </Link>
          <span className='text-gray-500'>{createdAt}</span>
        </div>
        <div className='post-description text-base lg:text-lg'>{description}</div>
        <div className='post-read-more'>
          <Link to={slug} className='text-blue-800 underline'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
