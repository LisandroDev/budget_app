import logoImage from "../assets/logo.webp";

const Logo = () => {
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center gap-2">
      <a className="text-decoration-none" href="/">
        <img style={{ height: "200px" }} src={logoImage} alt="logo" />
        <h2>Budget App</h2>
      </a>
    </div>
  );
};

export default Logo;
