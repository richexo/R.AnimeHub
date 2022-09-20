import React from 'react'
import "./Main.css"
import { FaSearch, FaTimes } from 'react-icons/fa'
import Topanime from './Topanime'
import Animesearch from './Animesearch'

function Main({ onDelete, searchHandler, search, animeList, setSearch, setAnimeList, topAnime, setTopAnime }) {


  return (
    <div className="main">
      <h2><b id="R"> R.</b> <b>Anime</b> Hub</h2>
      <br /><br /><br />
      <form>
        <input type="search"
          placeholder='Search anime ...'
          required
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="times">
          <FaTimes onClick={() => onDelete({ search, animeList })} />
        </div>
        <div className="faicon" onClick={searchHandler}>
          <FaSearch />
        </div>

      </form>
      <div className="main_container">
        <br /><br />
        <div className="animesearch">
          <Animesearch searchHandler={searchHandler} animeList={animeList} setAnimeList={setAnimeList} search={search} setSearch={setSearch} />
        </div> <br />
        <div className="Topanime">
          <Topanime topAnime={topAnime} setTopAnime={setTopAnime} />
        </div>
      </div>
    </div>

  )
}

export default Main
