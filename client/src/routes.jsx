import { createBrowserRouter } from 'react-router'
import MainLayout from './layouts/MainLayout'
import HomePage from './routes/HomePage'
import PostListPage from './routes/PostListPage'
import SinglePostPage from './routes/SinglePostPage'
import Write from './routes/Write'
import SignInPage from './routes/SignInPage'
import SignUpPage from './routes/SignInPage'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'posts/*', Component: PostListPage },
      {
        path: ':slug',
        Component: SinglePostPage
      },
      {
        path: 'write',
        Component: Write
      },
      {
        path: 'sign-in',
        Component: SignInPage
      },
      {
        path: 'sign-up',
        Component: SignUpPage
      }
    ]
  }
])

export default router
