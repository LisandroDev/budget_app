import Footer from "../Footer";
import Logo from "../Logo";
import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const Login = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const handleSubmit = () => {
    if (variant === "LOGIN") {
      axios
        .post("/api/auth/login", { email: email, password: password })
        .then((res) => {
          sessionStorage.setItem("jwt_token", res.token);
          redirect("/");
        })
        .catch((error) => console.log("error at login"));
    }

    if (variant === "REGISTER") {
      axios
        .post("/api/auth/register", { email: email, password: password })
        .then(() => setVariant("LOGIN"))
        .catch((error) => console.log("Error at registering"));
    }
  };
  const handleChange = (event, action) => {
    if (action === "email") {
      setEmail(event.currentTarget.value);
    }
    if (action === "password") {
      setPassword(event.currentTarget.value);
    }
    if (action === "repeatedPassword") {
      setRepeatedPassword(event.currentTarget.value);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-between align-items-center vh-100 position-relative">
      <Logo />
      <div className="container-sm w-md-25">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              required={true}
              type="email"
              onChange={(event) => handleChange(event, "email")}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              required={true}
              onChange={(event) => handleChange(event, "password")}
              className="form-control"
              id="exampleInputPassword1"
            />

            {variant === "REGISTER" && (
              <>
                {" "}
                <label htmlFor="repeatPassword" className="form-label">
                  Repeat password
                </label>
                <input
                  type="password"
                  required={true}
                  onChange={(event) => handleChange(event, "repeatedPassword")}
                  className="form-control"
                  id="repeatPassword"
                />{" "}
              </>
            )}
          </div>
          <div className="mb-3 form-check">
            <div
              onClick={() =>
                variant === "REGISTER"
                  ? setVariant("LOGIN")
                  : setVariant("REGISTER")
              }
            >
              {variant === "LOGIN"
                ? "Dont have an account ? create one!"
                : "Already have an account ? Sign in"}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
