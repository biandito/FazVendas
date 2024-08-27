import React from "react"
import Home from "../components/MainPage/Home"
import Descontos from "../components/Descontos/Descontos"
import Equipamentos from "../components/Equipamentos/Equipamentos"
import Sementes from "../components/Sementes/Sementes"
import Wrapper from "../components/wrapper/Wrapper"
import Fertilizantes from "../components/Fertilizantes/Fertilizantes"
import Irrigação from "../components/Irrigação/Irrigação"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />

      <Descontos productItems={productItems} addToCart={addToCart} />
      <Equipamentos productItems={productItems} addToCart={addToCart}/>
      <Sementes productItems={productItems} addToCart={addToCart}/>
      <Fertilizantes productItems={productItems} addToCart={addToCart}/>
      <Irrigação productItems={productItems} addToCart={addToCart}/>

      
      <Wrapper />
    </>
  )
}

export default Pages
