import React, { useState } from "react";
import "./App.css";
import { engineContext } from "./context/engineContext";
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import ResultPage from "./pages/ResultPage";
import initialStates from "./store/initialStates";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const App = () => {

  return (
    <Router>
      <engineContext.Provider>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/resultpage" element={<ResultPage/>} />
          <Route path="/addpage" element={<AddPage/>} />
        </Routes>
      </engineContext.Provider>
    </Router>
  );
};

export default App;
