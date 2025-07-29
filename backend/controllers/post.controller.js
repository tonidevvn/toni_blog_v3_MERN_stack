import Post from '../models/post.model.js'

export const getPosts = async (req, res) => {
  try {
    console.log('Attempting to fetch posts...')
    const posts = await Post.find()
    res.status(200).json(posts)
  } finally {
    console.log('Done fetching posts!')
  }
}

export const getPost = async (req, res) => {
  try {
    console.log('Attempting to fetch post...')
    const post = await Post.findOne({slug: req.params.slug})
    res.status(200).json(post)
  } finally {
    console.log('Done fetching post!')
  }
}

export const createPost = async (req, res) => {
  try {
    console.log('Attempting to create a new post...')
    const newPost = new Post(req.body)
    const post = await newPost.save()
    res.status(200).json(post)
  } finally {
    console.log('Done creating a new post!')
  }
}

export const deletePost = async (req, res) => {
  try {
    console.log(`Start to delete a post id ${req.params.id}`)
    const post = await Post.findByIdAndDelete(req.params.id)
    res.status(200).json(`Post id ${req.params.id} was deleted!`)
  } finally {
    console.log(`Deleted the post id ${req.params.id}`)
  }
}
