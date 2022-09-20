import React from 'react'
import "./Header.css"
const Header = ({quote, getQuote}) => {
  return (
    <div className='header'>

      <h1 className="sname"><strong>R</strong>. AnimeHub</h1><br />
       <div className="all"  onClick={getQuote}>
     <strong>Quotes</strong>   
        <p className="one">{quote}</p>
      </div> 
      <p className='two'><strong>OTAKUS</strong>  personal Space</p> <br />
    </div>
  )
}

export default Header
