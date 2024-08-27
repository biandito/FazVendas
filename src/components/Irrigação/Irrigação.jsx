import React from "react"
import FlashCard from "./FlashCard"
import { Link } from "react-router-dom";

import "./style.css"

const Irrigação = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
        <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa-solid fa-border-all'></i>
              <h2>Irrigação</h2>
            </div>
           <div className='heading-right row '>
           <Link to={`/cat/irrigação`}>
              <span>Ver Tudo</span>
              <i className='fa-solid fa-caret-right'></i>
              </Link> </div>
          </div>
          
          <FlashCard productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
    </>
  )
}

export default Irrigação
