import React from "react";
import Form from "../components/Form";
import logo from '../assets/tesodev.png'

const MainPage = () => {
  return (
    <div className="mainpage">
      <div className="main-logo">
      <img src={logo} alt="logo" className="img" />
      </div>
      <div className="info">
        <p>Search web app</p>
      </div>
      <Form />
    </div>
  );
};

export default MainPage;
