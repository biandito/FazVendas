import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Entrega rápida",
      decs: "Garantia de entrega em todos os estados",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Pagamento seguro",
      decs: "Diversas opções de pagamento na hora da compra",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Compre com segurança",
      decs: "Oferecemos o melhor custo benefício para suas compras",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Suporte 24 horas",
      decs: "Reclamações ou dúvidas? Entre em contato com nosso time de suporte a hora que quiser",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
