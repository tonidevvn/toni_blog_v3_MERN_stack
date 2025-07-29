import { getAuth } from '@clerk/express'
import Post from '../models/post.model.js'
import User from '../models/user.model.js'

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
    const post = await Post.findOne({ slug: req.params.slug })
    res.status(200).json(post)
  } finally {
    console.log('Done fetching post!')
  }
}

export const createPost = async (req, res) => {
  try {
    const { userId } = getAuth(req)
    const authenticatedUser = await User.findOne({ clerkUserId: userId })
    if (!authenticatedUser) {
      return res.status(400).json({ error: 'Invalid request: not authenticated.' })
    }
    console.log('Attempting to create a new post...')
    const newPost = new Post({ user: authenticatedUser._id, ...req.body })
    const _newPost = await newPost.save()
    res.status(200).json(_newPost)
  } finally {
    console.log('Done creating a new post!')
  }
}

export const deletePost = async (req, res) => {
  try {
    const { userId } = getAuth(req)
    const authenticatedUser = await User.findOne({ clerkUserId: userId })
    if (!authenticatedUser) {
      return res.status(400).json({ error: 'Invalid request: not authenticated.' })
    }

    console.log(`Start to delete a post id ${req.params.id}`)
    const deletedPost = await Post.findByIdAndDelete({ _id: req.params.id, user: authenticatedUser._id })
    if (!deletedPost) return res.status(403).json({ error: 'Invalid request: post not found or not authorized.' })
    res.status(200).json(`Post id ${req.params.id} was deleted!`)
  } finally {
    console.log(`Deleted the post id ${req.params.id}`)
  }
}
