import React from "react";
import { useContext } from "react";
import  { useNavigate } from 'react-router-dom'
import { engineContext } from "../context/engineContext";
import Card from "./Card";
import logo from '../assets/tesodev.png'

const Form = () => {
  const { text,output,setText } = useContext(engineContext);

  // Search Bar Optimization
  const handleClick = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Fill in the gap...");
    } else {
      setText(text);
    }
  };

   // Addpage ve ResultPage sayfalarına gidiş

  const navigate = useNavigate();
  const goAddPage = () => {
    navigate("/addpage");
  };
  const goResult = () => {
    navigate({ pathname: "/resultpage", output });
  };

  return (
    <div className="search-bar">
      <img src={logo} alt="logo" className="img" />
      <div className="form-outline">
        <input
          type="search"
          id="form1 "
          className="form-control"
          placeholder="Enter name/surname"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="button" className="btn" onClick={handleClick}>
            Search
        </button>
      </div>

      <div className="add-btn">
        <button
          type="button"
          className="btn"
          onClick={goAddPage}
        >
          Add New Record
        </button>
      </div>

      <div className="cards">
        {output.slice(0, 3).map((item, index) => <Card key={index} item={item} />)}

        {output.length>3 ? (
          <div className="">
            <button
              type="button"
              className="btn-more"
              onClick={goResult}
            >
              <b>Show More...</b>
            </button>
          </div>
        ) : null}
      </div>

    </div>
  );
};

export default Form;
