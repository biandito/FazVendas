import  React, {useState } from 'react'
import Data from "../../components/Data"
import { Link } from "react-router-dom"


function List(props) {
    const searchResult = document.querySelector('.result-Search')
    //create a new array by filtering the original array
    const filteredData = Data.productItems.filter((el) => {
       

        //if no input the return the original
        if (props.input === '') {
            if(searchResult != null)searchResult.classList.remove("active")
            return '';
        }
        //return the item which contains the user input
        else {
            if(searchResult != null) searchResult.classList.add("active")
            return el.name.toString().toLowerCase().includes(props.input)
        }
    })

    return (
     
        
        <div className='result-Search container c_flex'>
            
        {/*<div className={filteredData.lenght === 0 ? "result-Search active" : "result-Search active"}>*/} 


    <ul>
            {filteredData.map((item) => (
                  <Link to={'/prod/'+item.id} ><li key={item.id}  >{item.name}</li></Link>
            ))}
        </ul></div>

     
    )
 
}

export default List