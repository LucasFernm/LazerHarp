import React, { useState } from "react";
import { createUser } from "../api";
import "./FormStyles.css";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        name,
        email,
        password,
      };

      const newUser = await createUser(userData);
      console.log("New user:", newUser);

      // Limpar os campos do formulário após a criação do usuário
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Sign Up</h2>
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
        Create User
      </button>
    </form>
  );
};

export default SignupForm;
