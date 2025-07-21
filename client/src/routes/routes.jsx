import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "./HomePage";
import PostListPage from "./PostListPage";
import SinglePostPage from "./SinglePostPage";
import Write from "./Write";
import SigninPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "posts", Component: PostListPage },
      {
        path: ":slug",
        Component: SinglePostPage,
      },
      {
        path: "write",
        Component: Write,
      },
      {
        path: "sign-in",
        Component: SigninPage,
      },
      {
        path: "sign-up",
        Component: SignUpPage,
      },
    ],
  },
]);

export default router;
