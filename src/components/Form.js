import React, { useState } from "react";
import { useContext } from "react";
import  { useNavigate } from 'react-router-dom'
import { engineContext } from "../context/engineContext";
import Card from "./Card";


const Form = () => {
  const { text,output,setText } = useContext(engineContext);
  const [isSearched, setIsSearched] = useState(true)
  console.log(output)
  // Search Bar Optimization
  const handleClick = (e) => {
    e.preventDefault();
    if(text){
      setIsSearched(true)
    }else{
      setIsSearched(false)
    }
    setText(text);
  };

   // Addpage ve ResultPage sayfalarına gidiş

  const navigate = useNavigate();

  const goResult = () => {
    navigate({ pathname: "/resultpage", output });
  };
 

  return (
    <div className="search-bar">
     
      <div className={isSearched ? "form-outline":"input-group error"}>
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
      <div className={isSearched ? "message":"error-message"}>Please enter something...</div>

      <div className={output.length > 0 ? "cards" : ''}>
        {output.slice(0, 3).map((item, index) => <Card key={index} item={item} />)}

        {output.length>3 ? (
          <div className="show-more">
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
