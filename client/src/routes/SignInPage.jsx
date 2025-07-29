import { SignIn } from '@clerk/react-router'

const SignInPage = () => {
  return (
    <div className='flex items-center justify-center flex-col space-y-2 h-[calc(100vh-100px)]'>
      <SignIn signUpUrl='sign-up' />
    </div>
  )
}

export default SignInPage
