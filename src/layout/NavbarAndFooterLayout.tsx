import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const NavbarAndFooterLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-16 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default NavbarAndFooterLayout;
