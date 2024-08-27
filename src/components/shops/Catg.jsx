import React from "react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "equipamento",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Re dimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Categorias </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
               <Link
            key={value.cateName}
           // Moving to the product page
           to={`/cat/${value.cateName}`}
            className=""
          >
            <img src={value.cateImg} alt='' />
            <span>{value.cateName}</span>
            </Link>
          </div>
          )
        })}
       
      </div>
    </>
  )
}

export default Catg
