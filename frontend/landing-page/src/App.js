import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MembersPage from "./pages/MembersPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
