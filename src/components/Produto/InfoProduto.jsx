import React, { useState } from "react"
import { Link } from "react-router-dom"


const InfoProduto = ({ productItems, addToCart, produto }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }


  return (
    <>
      {productItems.filter(produ => produ.id == produto).map(filteredProd => (
     <>

     <div className="container c_flex">
     <p  className = "rota">
      <Link to='/'>Página Inicial </Link> &gt;
      <Link to={'/cat/'+filteredProd.cat}> {filteredProd.cat} </Link>  &gt;
      <Link > {filteredProd.name}</Link>
     
     </p>

     </div>



            <div className='Protudo container f_flex'>
              <div className='product'>
                <div className='img'>
                  
                  
                  <div><img src={'.'+filteredProd.cover} alt='' width='670px'/></div>
                
                </div>
                
              </div>

              <div className='product'>
                <div className='detalhes product-details'>
                  <h2>{filteredProd.name}</h2>
                  
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='descricao'>
                    <p>{filteredProd.desc}</p>
                  </div>
                  <div className="preco">
                  {(filteredProd.discount > 0)  &&<h4 className='old'><s>R${filteredProd.price.toFixed(2)}</s> {filteredProd.discount}% de desconto </h4> }
                  <div className='price'>
                   
                    <h2>R${(filteredProd.price-(filteredProd.price*(filteredProd.discount/100))).toFixed(2)}</h2>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                   
                  </div></div>
                  <div className="botaoCarrinho">
                  <button className='btn-primary' onClick={() => addToCart(filteredProd)}>
                      <h4>Adicionar ao Carrinho</h4>
                    </button></div>
                </div>
              </div>
            </div></>
          )
        )}
    </>
  )
}

export default InfoProduto
