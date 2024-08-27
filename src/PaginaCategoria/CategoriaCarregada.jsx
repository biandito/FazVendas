import React from "react"
import { useParams } from 'react-router-dom';

import Shop from "../components/shops/Shop"



const CategoriaCarregada = ({ productItems, addToCart, CartItem, shopItems }) =>{
  const { cat } = useParams();


  return (<>
       <Shop shopItems={shopItems} addToCart={addToCart} Cat={cat} />

 
 </>);
}
  export default CategoriaCarregada


