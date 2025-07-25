import { Link, Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import MainCategories from "../components/MainCategories";

const MainLayout = () => {
  return (
    <div className="flex flex-col mt-4 gap-4 px-4 pr-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* NAV BAR */}
      <Navbar />
      <div className="main_content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
