import { useEffect, useState } from "react";
import { IKImage } from "./IKImage";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import useWindowState from "../hooks/useWindowState";

const menus = [
  { title: "Home", link: "" },
  { title: "Trending", link: "posts/trending" },
  { title: "Most Popular", link: "posts/most-popular" },
  { title: "About", link: "about" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth] = useWindowState();

  useEffect(() => {
    if (windowWidth > 768 && open)
      setOpen(false);
  }, [windowWidth]);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link className="flex items-center focus:outline-none" to="/">
        <IKImage
          src="/logo.png"
          className="h-8 w-8 mr-6 rounded-[8px]"
          alt="Toni blog logo"
        />
        <span className="text-2xl font-bold text-gray-800 hover:text-blue-800">
          ToniBlog
        </span>
      </Link>
      {/* MOBILE MENU */}
      <div className="flex flex-col md:hidden ">
        <div
          className="cursor-pointer text-4xl z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <span className="fixed top-8 right-2">
              <FiX />
            </span>
          ) : (
            <span>
              <FiMenu />{" "}
            </span>
          )}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`absolute top-0 bottom-0 flex flex-col w-full h-full max-h-svh items-center justify-center gap-8 transition-all ease-in-out text-lg font-medium ${
            open
              ? "left-0 before:block before:fixed before:bg-gray-800 before:opacity-80 before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-0"
              : "left-[100%] before:hidden"
          }`}
        >
          <div className="fixed w-full h-full flex flex-col justify-center items-center gap-10 backdrop-blur-md z-40">
            {menus.map((menu, index) => (
              <Link
                key={`mb${index}`}
                to={menu.link}
                className="text-white text-xl font-semibold hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                {menu.title}
              </Link>
            ))}
            <SignedOut>
              <Link to="sign-in" onClick={() => setOpen(false)}>
                <button className="py-2 px-4 rounded-3xl bg-blue-800 hover:bg-white hover:border-slate-600 hover:text-blue-500 text-white font-semibold">
                  Login 👋
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
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
