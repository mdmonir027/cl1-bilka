import React from "react";
import LoginForm from "./../Components/Login/LoginForm";
import "./style/Login.scss";
const Login = () => {
  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
