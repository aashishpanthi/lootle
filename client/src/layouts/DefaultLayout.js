import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default DefaultLayout;
