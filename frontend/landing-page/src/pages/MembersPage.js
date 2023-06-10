import React from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import "../styles/PageStyles.css";

const MembersPage = () => {
  return (
    <div className="page-container">
      <h1>Members Page</h1>
      <div className="form-section">
        <SignupForm />
      </div>
      <div className="form-section">
        <LoginForm />
      </div>
    </div>
  );
};

export default MembersPage;
