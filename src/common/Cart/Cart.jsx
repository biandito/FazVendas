import React from "react"
import "./style.css"
import { Link } from "react-router-dom";


const Cart = ({ CartItem, addToCart, decreaseQty, removeFromCart, removeAll }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item, discount) => price + item.qty * (item.price-(item.price*(item.discount/100))), 0)

  const tirartudo =() =>
  {
    CartItem.map( (todosItens) => removeFromCart(todosItens))
  }

  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>Sem itens no carrinho</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = (item.price-(item.price*(item.discount/100))) * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      R${(item.price-(item.price*(item.discount/100))).toFixed(2)} * {item.qty}
                      <span>R${productQty.toFixed(2)}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() => removeFromCart(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            {//<h2>Cart Summary</h2>^
            }
            <div className=' d_flex'>
              <h4>Preço Total:</h4>
              <h3>R${totalPrice.toFixed(2)}</h3>
              
            </div>
            <Link to={`/pedido`}><button className='btn-primary' onClick={() => removeAll(CartItem)}>Fechar Pedido</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
