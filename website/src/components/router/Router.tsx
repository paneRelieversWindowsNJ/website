import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/Home";
import Services from "../../pages/Services";
import AboutUs from "../../pages/AboutUs";


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Services" Component={Services} />
        <Route path="/AboutUs" Component={AboutUs} />
      </Routes>
    </Router>
  );
};

export default AppRouter;