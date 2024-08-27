import React, {useState } from "react";
import logo from "../../components/assets/images/logo.png"
import { Link } from "react-router-dom"
import List from "./List";

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
 
    var lowerCase =e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const Esconder = () => {
  

    // Use setTimeout to simulate a delayed action
    setTimeout(() => {
      const searchResult = document.querySelector('.result-Search')
      if(searchResult != null)searchResult.classList.add("hidden")
    }, 200);
  };



  const Show =()=>{
    const searchResult = document.querySelector('.result-Search')
    if(searchResult != null)searchResult.classList.remove("hidden")
  }

  return (
    <>
      <section className='search'  onBlur={Esconder}>
        <div className='container c_flex' >
          <div className='logo width '>
          <Link to='/'><img src={logo} alt='' /></Link>
          </div>

          <div className='search-box f_flex'>

          {/*<span>Categorias</span>*/}

            <input type='text' placeholder='Pesquise e aperte Enter...' onChange={inputHandler} onClick={Show} />
            <i className='fa fa-search'></i>
           

          </div>
         

          <div className='icon f_flex width'>
          <div className='perfil'>
          <Link to='/profile'>
            <i className='fa fa-user icon-circle'></i>
            </Link>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>

        </div>
       <List input={inputText}/>

      </section>

    </>
  )
}

export default Search
