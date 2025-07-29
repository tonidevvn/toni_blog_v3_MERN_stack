import { useUser } from '@clerk/clerk-react'
import React from 'react'
import RichEditor from '../components/RichEditor'

const Write = () => {
  const { isLoaded, isSignedIn } = useUser()
  const fileInputRef = React.useRef(null)

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (isLoaded && !isSignedIn) {
    return <div>You should login!</div>
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col'>
      <h3 className='font-light'>Create a New Post</h3>
      <form className='flex flex-col gap-3'>
        <button
          type='button'
          className='mb-2 bg-white text-blue-900 px-3 py-1 w-fit rounded-lg shadow-md'
          onClick={handleButtonClick}
        >
          Add a Cover Image
        </button>
        <input type='file' ref={fileInputRef} style={{ display: 'none' }} accept='image/*' />
        <input
          placeholder='My Awesome Story'
          className='bg-transparent outline-none border-0 py-2 text-4xl font-semibold text-gray-600'
        ></input>
        <div className='flex gap-2'>
          <label>Choose a Category: </label>
          <select name='category' className='ml-2 rounded-lg'>
            <option value='general'>General</option>
            <option value='technology'>Technology</option>
            <option value='lifestyle'>Lifestyle</option>
            <option value='travel'>Travel</option>
            <option value='food'>Food</option>
            <option value='marketing'>Marketing</option>
          </select>
        </div>
        <div className='short-description '>
          <textarea
            rows={2}
            aria-multiline={true}
            className='rounded-xl text-gray-700 flex-1 p-4 w-full focus:outline-none shadow-md'
            placeholder='A Short Description'
          />
        </div>
        <div className='description h-[200px]'>
          <RichEditor className='bg-white rounded-xl border-white border-1 w-full h-full pb-10 shadow-md' />
        </div>
        <button className='bg-blue-600 rounded-lg text-white p-2 px-4 w-40 '>Send</button>
      </form>
    </div>
  )
}

export default Write
