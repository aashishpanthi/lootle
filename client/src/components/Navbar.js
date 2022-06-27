import { Button } from "@mui/material";
import Logo from "./Logo";
import "./styles/navbar.css";

import { GoogleLogin } from "@moeindana/google-oauth";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo name={true} />
      <GoogleLogin
        onSuccess={(response) => {
          console.log(response);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </nav>
  );
};
export default Navbar;
