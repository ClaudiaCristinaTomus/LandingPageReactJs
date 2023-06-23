import React from 'react'
import "./Products.scss";
import productOneImg from "../../assets/4.jpg";
import productTwoImg from "../../assets/5.jpg";
import productThreeImg from "../../assets/6.jpg";
import productFourImg from "../../assets/7.jpg";
import productFiveImg from "../../assets/8.jpg";
const Products = () => {
  return (
    <div className="productsContainer">

      <div className='productOne'>
        <div className='productOne_left'>
          <img src={productOneImg} alt="" className='productOne_Img'/>
        </div>
        <div className='productOne_right'>
          <h3>About Our Goods</h3>
          <p>All our drinks are organic. We offer you the fresh products we bought from the domestic manufacturer. We care about you having a pleasnt time.</p>
          <button>View The Menu</button>
        </div>
      </div>

      <div className='productTwo'>
        <div className='productTwo_right'>
          <h3>About Our Goods</h3>
          <p>All our drinks are organic. We offer you the fresh products we bought from the domestic manufacturer. We care about you having a pleasnt time.</p>
          <button>View The Menu</button>
        </div>
        <div className='productOne_left'>
          <img src={productTwoImg} alt="" className='productTwo_Img'/>
        </div>
      </div>

      <div className='productThree'>
        <div className='productThree_left'>
          <img src={productThreeImg} alt="" className='productThree_Img'/>
        </div>
        <div className='productThree_right'>
          <h3>About Our Goods</h3>
          <p>All our drinks are organic. We offer you the fresh products we bought from the domestic manufacturer. We care about you having a pleasnt time.</p>
          <button>View The Menu</button>
        </div>
      </div>

      <div className='productFour'>
        <div className='productFour_right'>
          <h3>About Our Goods</h3>
          <p>All our drinks are organic. We offer you the fresh products we bought from the domestic manufacturer. We care about you having a pleasnt time.</p>
          <button>View The Menu</button>
        </div>
        <div className='productFour_left'>
          <img src={productFourImg} alt="" className='productFour_Img'/>
        </div>
      </div>

      <div className='productFive'>
        <div className='productFive_left'>
          <img src={productFiveImg} alt="" className='productFive_Img'/>
        </div>
        <div className='productFive_right'>
          <h3>About Our Goods</h3>
          <p>All our drinks are organic. We offer you the fresh products we bought from the domestic manufacturer. We care about you having a pleasnt time.</p>
          <button>View The Menu</button>
        </div>
      </div>


    </div>
  )
}

export default Products