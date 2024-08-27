import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import Categories from "../MainPage/Categories"

const Shop = ({ addToCart, shopItems, Cat }) => {
 
    return (
      <>
        <section className='shop background'>
          <div className='container d_flex'>
            <Categories />
  
            <div className='contentWidth'>
              <div className='heading d_flex'>
                <div className='heading-left row  f_flex'>
                <h2>{Cat}</h2>
                </div>
              
              </div>
              <div className='product-content  grid1'>
                <ShopCart addToCart={addToCart} shopItems={shopItems} Cat={Cat}/>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  
}

export default Shop
