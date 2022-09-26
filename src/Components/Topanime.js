import React from 'react'
import "./Topanime.css"

function Topanime({ topAnime }) {
  return (
    <div className='anime'>
      <div className="para">
        <h2>
          <strong> Top Ranking <br /> Animes </strong>
        </h2>
      </div>

      <br />
      <div className="animez">
        {
          topAnime.map(anime => (
            <a href={anime.url}
              key={anime.mal_id}
              target="_blank"
              rel="noopener noreferrer">
              <h3>{anime.title}</h3>
              <img src={anime.image_url} alt="anime pic" />
            </a>
          ))}
      </div>
    </div>
  )
}

export default Topanime
