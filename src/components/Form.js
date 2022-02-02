import React from "react";
import { useContext } from "react";
import  { useNavigate } from 'react-router-dom'
import { engineContext } from "../context/engineContext";
import Card from "./Card";

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

      <div>
        <button
          type="button"
          className="btn"
          onClick={goAddPage}
        >
          Add New Record
        </button>
      </div>

      <div className="">
        {output.slice(0, 3).map((item, index) => <Card key={index} item={item} />)}

        {output.length>3 ? (
          <div className="">
            <button
              type="button"
              className="btn"
              onClick={goResult}
            >
              Show More...
            </button>
          </div>
        ) : null}
      </div>

    </div>
  );
};

export default Form;
