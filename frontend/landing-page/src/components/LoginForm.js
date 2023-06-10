import React, { useState } from "react";
import { loginUser } from "../api";
import "./FormStyles.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        email,
        password,
      };

      const user = await loginUser(credentials);
      console.log("Logged in user:", user);

      // Limpar os campos do formulário após o login
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login</h2>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
