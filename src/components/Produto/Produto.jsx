import React from "react"
import { useParams } from 'react-router-dom';
import InfoProduto from "./InfoProduto";
import "./Produto.css"
import Data from "../Data";



const Produto = ({ productItems, addToCart, CartItem, shopItems }) => {
    const { prod } = useParams();
  
   
  return (
    
   
        <>
       <InfoProduto productItems={productItems} addToCart={addToCart} produto={prod}/>

      </>
      
      

  
  )
}

export default Produto
