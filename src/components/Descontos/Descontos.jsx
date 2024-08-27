import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const Descontos = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa fa-bolt'></i>
              <h2>Descontos</h2>
            </div>
            <div className='heading-right row '>
              <span>Ver Tudo</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
    </>
  )
}

export default Descontos
