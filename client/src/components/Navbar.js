import { Button } from "@mui/material";
import Logo from "./Logo";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Button variant="contained">Sign Up</Button>
    </nav>
  );
};
export default Navbar;
