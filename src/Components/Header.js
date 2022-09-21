import React from 'react'
import "./Header.css"
const Header = ({quote, getQuote}) => {
  return (
    <div className='header'>

     <div className="rname">
       <h1 ><strong>R</strong>. AnimeHub</h1><br />
       </div>
       <div className="all"  onClick={getQuote}>
     <strong>Quotes</strong>   
        <p className="one">{quote}</p>
      </div> 
      <p className='two'><strong>OTAKUS</strong>  personal Space</p> <br />
    </div>
  )
}

export default Header
