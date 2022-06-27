import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = ({ name }) => {
  return (
    <Link to="/" className="brand">
      <img src="/logo.png" alt="Lootle logo" />
      {name && (
        <Typography variant="h5" component="h1" className="brand-name">
          Lootle
        </Typography>
      )}
    </Link>
  );
};

export default Logo;
