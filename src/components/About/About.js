import React from 'react'
import "./About.scss";
import aboutImg from '../../assets/1.jpg'

const About = () => {
  return (
    <div className="about">
      <div className='left'>
        <h1 className='title'>Delicious Taste!</h1>
        <p>The taste that everyone likes is here. Discover new organic drinks that refresh in the summer heat.</p>
        <div className="search">

        </div>
      </div>
      <div className="right">
        <img src={aboutImg} alt="img" />;
      </div>
    </div>
  )
}

export default About