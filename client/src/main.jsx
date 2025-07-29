import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import { rootAuthLoader } from '@clerk/react-router/ssr.server'
import router from './routes'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export async function loader(args) {
  return rootAuthLoader(args)
}

export function ErrorBoundary({ error }) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className='pt-16 p-4 container mx-auto'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full p-4 overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <RouterProvider router={router} />
  </ClerkProvider>
)
