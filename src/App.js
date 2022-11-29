import React, { useState, useEffect, useReducer } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function Slide({image,name,title,quote,className}){
  return <article className={className||""}>
      <img src={image} alt={name} className="person-img"/>
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className="icon" />
  </article>
}
function App() {
  const [people,setPeople]=useState(data)
  const [index,setIndex]=useReducer(reducer,0)
  function reducer(Cstate,type){
    switch (type){
      case "increment":
        return (Cstate+1)%people.length
      case "decrement":
        return Cstate==0?people.length-1:Cstate-1

      default:
          return Cstate
    }

  }
  return <section>
      <div className='title'>
          <h2>
            <span>/</span>reviews
          </h2>
      </div>
      <div className='section-center'>
          {
            people.map((person,i) => {
              const className=i==index?"activeSlide":(i==index-1?"lastSlide":"nextSlide")
              return <Slide {...person} className={className}/>
            })
          }
      </div>
      <button className='prev' onClick={()=>setIndex("decrement")}>
          <FiChevronLeft/>
      </button>
      <button className='next' onClick={()=>setIndex("increment")}>
          <FiChevronRight/>
      </button>
  </section>
}

export default App;
