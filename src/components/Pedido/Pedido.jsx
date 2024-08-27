import React from "react"
import "./pedido.css"
import { Link } from "react-router-dom"


const Pedido = () =>{

return(
    <>
    <div className="pedido container c_flex">

    <div className='container'>
          <div className='container'>
              <h1>PEDIDO CONCLUÍDO</h1>

          </div>
        <Link to={`/`} className="botao"><button className='btn-primary botao'>Voltar para a Página Inicial</button></Link>

          </div>


    </div>
    </>
)
}

export default Pedido