import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { SET_USER } from "../../store/actions";
import { useDataLayer } from "./../../store/dataLayer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [errors, setErrors] = useState({});
  const loginEmailRef = useRef(null);

  const history = useHistory();

  const dispatch = useDataLayer()[1];

  // useEffects

  useEffect(() => loginEmailRef.current.focus(), []);

  // functions

  const submitHandler = (event) => {
    event.preventDefault();

    const validate = validation();
    if (validate.isValid) {
      setErrors({});
      const userEmail = process.env.REACT_APP_USER;
      const userPassword = process.env.REACT_APP_PASS;

      if (email === userEmail && password === userPassword) {
        dispatch({
          type: SET_USER,
          payload: {
            user: { email, password },
          },
        });

        history.push("/admin/dashboard");
      } else {
        setErrors({
          email: "Email Or Password was incorrect!",
          password: "Email Or Password was incorrect!",
        });
      }
    } else {
      setErrors(validate.errors);
    }
  };

  const validation = () => {
    const errors = {};

    if (!email) {
      errors.email = "Please enter a email";
    }
    if (!password) {
      errors.password = "Please enter a password";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors: errors,
    };
  };

  return (
    <form className="loginForm" onSubmit={submitHandler}>
      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          ref={loginEmailRef}
          type="email"
          id="email"
          placeholder="Enter email address"
          className={`form__control ${errors?.email && "is-invalid"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <div className="invalid-feedback">{errors?.email}</div>
        )}
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label text__white--imp">
          Password
        </label>
        <input
          type={passwordShow ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className={`form__control ${errors?.password && "is-invalid"}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.password && (
          <div className="invalid-feedback">{errors?.password}</div>
        )}
        <div className="form__passwordShow">
          <input
            type="checkbox"
            value={passwordShow}
            id="passwordShow"
            onChange={(e) => setPasswordShow(e.target.checked)}
          />

          <label htmlFor="passwordShow" className="noselect">
            Show password
          </label>
        </div>
      </div>
      <button onClick={submitHandler} type="submit" className="form__submitBtn">
        Log In
      </button>

      <br />
      <Link to="/register">Don't Have an account? Register Here</Link>
    </form>
  );
};

export default LoginForm;
