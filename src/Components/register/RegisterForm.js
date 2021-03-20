import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    const validate = validation();
    if (validate.isValid) {
      setErrors({});
      console.log({ name, email, password, confirmPassword });
    } else {
      setErrors(validate.errors);
    }
  };

  const validation = () => {
    const errors = {};

    if (!name) {
      errors.name = "Please enter a name";
    }

    if (!email) {
      errors.email = "Please enter a email";
    } else if (!validator.isEmail(email)) {
      errors.email = "Please enter a valid emaill";
    }
    if (!password) {
      errors.password = "Please enter a password";
    } else if (password.length < 6) {
      errors.password = "Password length must be 6 character ";
    } else if (password.length > 20) {
      errors.password = "Password length must not greater be 20 character ";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm you password";
    }

    if (password && confirmPassword && password !== confirmPassword) {
      errors.password = "Password does'n matched!";
      errors.confirmPassword = "Password does'n matched!";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors: errors,
    };
  };

  return (
    <form className="registerForm" onSubmit={submitHandler}>
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter full name"
          className={`form__control ${errors?.name && "is-invalid"}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && <div class="invalid-feedback">{errors?.name}</div>}
      </div>
      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          className={`form__control ${errors?.email && "is-invalid"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && <div class="invalid-feedback">{errors?.email}</div>}
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label text__white--imp">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className={`form__control ${errors?.password && "is-invalid"}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.password && (
          <div class="invalid-feedback">{errors?.password}</div>
        )}
      </div>
      <div className="form__group">
        <label
          htmlFor="confirmPassword"
          className="form__label text__white--imp"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          className={`form__control ${errors?.confirmPassword && "is-invalid"}`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors?.confirmPassword && (
          <div class="invalid-feedback">{errors?.confirmPassword}</div>
        )}
      </div>
      <button type="submit" className="form__submitBtn">
        Register
      </button>
      <br />
      <Link to="/login">Alerady have an account? Login Here</Link>
    </form>
  );
};

export default RegisterForm;
