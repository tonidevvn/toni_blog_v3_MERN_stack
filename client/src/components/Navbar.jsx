import { useState } from "react";
import { IKImage } from "./IKImage";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const menus = [
  { title: "Home", link: "" },
  { title: "Trending", link: "trending" },
  { title: "Most Popular", link: "most-popular" },
  { title: "About", link: "about" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link className="flex items-center" to="/">
        <IKImage
          src="/logo.png"
          className="h-8 w-8 mr-6 rounded-[8px]"
          alt="Toni blog logo"
        />
        <span className="text-2xl font-bold text-gray-800">ToniBlog</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden sm:flex sm:flex-col px-2">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{open ? <FiX /> : <FiMenu />}</span>
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`absolute top-16 bottom-0 w-full h-full max-h-svh flex flex-col items-center justify-center gap-8 transition-all ease-in-out text-lg font-medium ${
            open ? "right-0" : "-right-[100%]"
          }`}
        >
          {menus.map((menu, index) => (
            <Link
              key={`mb${index}`}
              to={menu.link}
              className="text-gray-800 hover:text-gray-600"
            >
              {menu.title}
            </Link>
          ))}
          <SignedOut>
            <Link to="sign-in">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login 👋
              </button>
            </Link>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex md:items-center md:justify-center gap-8 xl:gap-12 font-medium">
        {menus.map((menu, index) => (
          <NavLink
            key={`lg${index}`}
            to={menu.link}
            className="text-gray-800 hover:text-gray-600"
          >
            {menu.title}
          </NavLink>
        ))}

        <SignedOut>
          <NavLink to="sign-in">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </NavLink>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
