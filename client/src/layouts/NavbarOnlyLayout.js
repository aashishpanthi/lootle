import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const NavbarOnlyLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default NavbarOnlyLayout;
