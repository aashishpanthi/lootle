import Navbar from "../components/Navbar";

const NavbarOnlyLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="site-content">{children}</main>
  </>
);

export default NavbarOnlyLayout;
