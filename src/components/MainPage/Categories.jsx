import React from "react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const data = [
    {

      cateName: "equipamentos",
    },
    {
      cateName: "sementes",
    },
    {
      cateName: "fertilizantes",
    },
    {
      cateName: "irrigação",
    },
  ]

  return (
    <>
      <div className='category'>
        
        {data.map((value, index) => {
          return (
            <Link
            key={value.cateName}
           // Moving to the product page
           to={`/cat/${value.cateName}`}
            className=""
          >
            <div className='box f_flex' key={index}>
              {/*<img src={/*value.cateImg} alt='' />*/}
              <span>{value.cateName}</span>
            </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories
