import React from 'react'

const CommentBox = ({ title }) => {
  return (
    <div className='w-full lg:w-2/3 my-4'>
      {!title ? '' : <h3 className='underline'>{title}</h3>}
      <div className='flex w-full justify-between items-center gap-8'>
        <textarea
          rows={2}
          aria-multiline={true}
          className='rounded-xl text-gray-700 flex-1 p-4'
          placeholder='Write a comment...'
        />
        <button className='bg-blue-600 rounded-xl text-white p-2'>Send</button>
      </div>
    </div>
  )
}

export default CommentBox
