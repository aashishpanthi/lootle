import { useContext } from "react";
import { Button } from "@mui/material";
import Logo from "./Logo";
import "./styles/navbar.css";

import { GoogleLogin, googleLogout } from "@moeindana/google-oauth";
import { UserContext, UserUpdateContext } from "../UserContext";

const Navbar = () => {
  const user = useContext(UserContext);
  const setUser = useContext(UserUpdateContext);

  const logout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <nav className="navbar">
      <Logo name={true} />
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <GoogleLogin
          onSuccess={(res) => {
            setUser(res);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      )}
    </nav>
  );
};
export default Navbar;
