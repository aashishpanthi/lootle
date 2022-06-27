import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="brand">
      <img src="/logo.png" alt="Lootle logo" />
      <Typography variant="h5" component="h1" className="brand-name">
        Lootle
      </Typography>
    </Link>
  );
};

export default Logo;
