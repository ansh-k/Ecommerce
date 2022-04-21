import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userRegister } from "../actions";
import { getUser } from "../actions";
import { useDispatch } from "react-redux";

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [validation, setValidation] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  toast.configure();

  const handleChange = (e) => {
    setValidation(false);
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser?.password === newUser?.cpassword) {
      userRegister(newUser)
        .then((res) => {
          // localStorage.setItem("token", res.data.token);
          // dispatch(getUser(res.data.token));
          toast("registration successfully!", { type: "success" });
          setTimeout(() => {
            history.push("/login");
          }, 500);
        })
        .catch((err) => {
          toast(err.response?.data, { type: "error" });
        });
    } else {
      setValidation(true);
    }
  };

  return (
    <div className="register-form bg-light border border-success shadow">
      <h4 style={{ textAlign: "center" }}>Sign up</h4>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="User Name"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="cpassword"
                    required
                    placeholder="Confirm password"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: "center" }}>
            <Button className="btn btn-success my-2" type="submit">
              Sign up
            </Button>
            {validation ? (
              <p className="text-danger">Passwords do not match!!</p>
            ) : (
              <br />
            )}
            <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
              <IoLogIn />
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
