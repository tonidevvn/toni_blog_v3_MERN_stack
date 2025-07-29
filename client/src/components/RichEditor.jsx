import { useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

const RichEditor = ({ ...rest }) => {
  const [value, setValue] = useState('')
  return <ReactQuill theme='snow' value={value} onChange={setValue} {...rest} />
}

export default RichEditor
