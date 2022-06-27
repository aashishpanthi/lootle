import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <Outlet />
    {/* <Footer /> */}
  </>
);

export default DefaultLayout;
