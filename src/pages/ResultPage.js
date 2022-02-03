/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router";
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { engineContext } from "../context/engineContext";
import { useContext } from "react";
import logo from "../assets/tesodev.png";

const ResultPage = () => {
  const { output: filteredData, text, setText } = useContext(engineContext);
  const [output, setOutput] = useState(filteredData);

  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(5);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexofFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = output.slice(indexofFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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

  const handleClick = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Fill in the gap...");
    } else {
      setText(text);
    }
  };

  return (
    <div className='main'>
      <div className='result-img'>
        <button type='button' className=' ' onClick={goMain}>
          <img src={logo} alt='logo' />
        </button>
      </div>
      <div className='form-outline'>
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
      <div className='dropdown'>
        <a
          href='#'
          >
          <i className='fas fa-sort-alt'></i> Order By
        </a>
        <div className='dropdown__menu'>
          <ul>
            <li>
              <a
                href='#'
                onClick={() => handleAlphabetic(output)}>
                Name ascending
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleAlphabeticReverse(output)}
                href='#'>
                Name descending
              </a>
            </li>
            <li>
              <a href='#'
              onClick={() => handleDateReverse(output)}>
                Year ascending
              </a>
            </li>
            <li>
              <a href='#'
                onClick={() => handleDate(output)}>
                Year descending
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='cards'>
        {currentCards.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      {output.length > 3 ? (
        <Pagination
          paginate={paginate}
          output={output}
          cardPerPage={cardPerPage}
        />
      ) : null}
    </div>
  );
};

export default ResultPage;
