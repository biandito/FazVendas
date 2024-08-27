import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>FazVendas</h1>
            <p>Maior mercado E-commerce focado na área de agricultura. Apoiando as produções agrícolas, desde as mais modernas às mais sustentáveis</p>
            {/*<div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>*/}
          </div>

         {/* <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>*/}
          <div className='box'>
            <h2>Nos Contate</h2>
            <ul>
              <li>Instituto Federal de São Paulo </li>
              <li>Beatriz Cardoso - SP3099849</li>
              <li>Guilherme Santana - SP3109208</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
