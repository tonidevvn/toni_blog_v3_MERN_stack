import { SignUp } from "@clerk/react-router";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-2 h-[calc(100vh-100px)]">
      <SignUp signInUrl="sign-in" />
    </div>
  );
};

export default SignUpPage;
