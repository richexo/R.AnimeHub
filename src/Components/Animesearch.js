import React from 'react'
import "./Animesearch.css"
function Animesearch({ search, animeList }) {
  return (
    <div className='animelist'>
     
      <div className='list'>
        
        {
          animeList.map(anime => (
            <a href={anime.url}
              key={anime.mal_id}
              target="_blank"
              rel="noopener noreferrer">
              <img src={anime.image_url} alt="anime pic" /> <br />
              <h3> {anime.title}</h3>
              <p className='storyline'>{anime.synopsis}</p>
              <p>{anime.rated}</p>
            </a>
          )
          )
          
        }

      </div>
    </div>
  )
}

export default Animesearch
