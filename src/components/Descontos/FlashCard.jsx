import React, { useState } from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  


  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
         if(productItems.discount > 0) return  (
       <div className='box'>
              <div className='product mtop compra'>
              <Link to={'/prod/'+productItems.id} ><div className='img'>
                  
                  {(productItems.discount > 0)  && <span className='discount'>-{productItems.discount}%</span>}
                    
                    <div><img src={productItems.cover} alt='' height='270px' width='270px'/></div>
                  {/*}  <div className='product-like'>
                      <label>{count}</label> <br />
                      <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div>*/}
                  </div></Link>
                  <div className='product-details'>
                  <Link to={'/prod/'+productItems.id} ><h3>{productItems.name}</h3></Link>
                  
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <s><h5 className='old'>R${productItems.price.toFixed(2)} </h5></s>
                  <div className='price'>
                   
                    <h4>R${(productItems.price-(productItems.price*(productItems.discount/100))).toFixed(2)}</h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
