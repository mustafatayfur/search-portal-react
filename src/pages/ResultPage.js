/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { engineContext } from "../context/engineContext";
import { useContext } from "react";
import logo from "../assets/tesodev.png";

const ResultPage = () => {
  const { output: filteredData, text, setText } = useContext(engineContext);
  const [output, setOutput] = useState([]);
  const [isSearched, setIsSearched] = useState(true);
  console.log(filteredData);
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  useEffect(() => {
    setOutput(filteredData);
  }, [filteredData]);
  console.log(output);

  // Search Bar Optimization

  const handleClick = (e) => {
    e.preventDefault();
    if (text) {
      setIsSearched(true);
    } else {
      setIsSearched(false);
    }
    setText(text);
  };

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(5);

  const indexOfLastCard = currentPage * cardPerPage;
  console.log(currentPage);
  const indexofFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = output.slice(indexofFirstCard, indexOfLastCard);
  console.log(currentCards);
  const paginate = (pageNumber) => {
    let numberOfPage = Math.ceil(output.length / cardPerPage);
    if (pageNumber < 1) {
      setCurrentPage(numberOfPage);
    } else if (pageNumber > numberOfPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  //Sorting

  const handleAlphabetic = (output) => {
    output.sort();
    setOutput([...output]);
  };
  const handleAlphabeticReverse = (output) => {
    output.sort().reverse();
    setOutput([...output]);
  };

  const handleDate = (output) => {
    output.sort((a, b) =>
      b[3]
        .split("/")
        .reverse()
        .join()
        .localeCompare(a[3].split("/").reverse().join())
    );
    setOutput([...output]);
  };
  const handleDateReverse = (output) => {
    output.sort((b, a) =>
      b[3]
        .split("/")
        .reverse()
        .join()
        .localeCompare(a[3].split("/").reverse().join())
    );
    setOutput([...output]);
  };

  return (
    <div>
      <div className='img-search'>
        <div className='result-img'>
          <button type='button' className='btn-img' onClick={goMain}>
            <img src={logo} alt='logo' className="image" />
          </button>
        </div>
        <div className="search-button">
          <div className={isSearched ? "form-outline" : "input-group error"}>
          <input
            type='search'
            id='form1 '
            className='form-control'
            placeholder='Enter name/surname'
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button type='button' className='btn' onClick={handleClick}>
            Search
          </button>
        </div>
        <div className={isSearched ? "message" : "error-message"}>
          Please enter something...
        </div> 
      </div>
      </div>
      <div className='main'>
        <div className='dropdown'>
          <a href='#'>
            <i className='fas fa-sort-alt'></i> Order By
          </a>
          <div className='dropdown__menu'>
            <ul>
              <li>
                <a href='#' onClick={() => handleAlphabetic(output)}>
                  Name ascending
                </a>
              </li>
              <li>
                <a onClick={() => handleAlphabeticReverse(output)} href='#'>
                  Name descending
                </a>
              </li>
              <li>
                <a href='#' onClick={() => handleDateReverse(output)}>
                  Year ascending
                </a>
              </li>
              <li>
                <a href='#' onClick={() => handleDate(output)}>
                  Year descending
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='result-cards'>
          {currentCards.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        {output.length > 5 ? (
          <Pagination
            paginate={paginate}
            output={output}
            currentPage={currentPage}
            cardPerPage={cardPerPage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ResultPage;
