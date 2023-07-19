import logoImage from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center gap-2">
      <Link to="/">
        <img style={{ height: "200px" }} src={logoImage} alt="logo" />
        <h2>Budget App</h2>
      </Link>
    </div>
  );
};

export default Logo;
