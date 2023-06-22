import React from "react";
import { useState } from 'react';
import "./About.scss";
import aboutImg from '../../assets/1.jpg'
var data = require("../data.json");

const About = () => {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log('serach,serachTerm');
  }


  return (
    <div className="about">
      <div className='left'>
        <h1 className='title'>Delicious Taste!</h1>
        <p>The taste that everyone likes is here. Discover new organic drinks that refresh in the summer heat.</p>
        <div className="search-container">
          <div className="search-inner">
            <input type="text" value={value} onChange={onChange} />
            <button onClick={() => onSearch(value)}>Search</button>
          </div>
          <div className="dropdown">
            {data.filter(item => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();
              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
            })
              .map((item) => (
                <div
                  onClick={() => onSearch(item.full_name)}
                  className="dropdown-row"
                  key={item.full_name}
                >
                  {item.full_name}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="right">
        <img src={aboutImg} alt="img" />
      </div>
    </div>
  )
}

export default About