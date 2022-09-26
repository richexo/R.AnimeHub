import React, { useState, useEffect } from "react";
import "./App.css"
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = useState("")
  const [animeList, setAnimeList] = useState([])
  const [quote, setQuote] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'de136430b2mshac70eeb22ad8756p1aa626jsnbba4d3e6f4be',
      'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
    }
  };
  const getTopanime = async () => {
    await fetch('https://jikan1.p.rapidapi.com/top/anime/1/bypopularity', options)
      .then(response => response.json())
      .then(response => setTopAnime(response.top.slice(0, 8)))
      .catch(err => console.error(err));
  }

  const getAnimeSearch = async (query) => {
    await fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${query}&type=Anime&sort=asc&order_by=title&page=1&limit=18 `, options)
      .then(response => response.json())
      .then(response => setAnimeList(response.results))
      .catch(err => console.error(err));

  }
  const getQuote = async () => {
    await fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
      .then(quote => setQuote(`${quote.quote} by ${quote.character} in ${quote.anime} `))
      .catch(err => console.error(err));

  }



  useEffect(() => {
    getTopanime();
    getQuote();
  },
    [])

  const searchHandler = (e) => {
    e.preventDefault();
    search.length < 1 ?
      setAnimeList(animeList.filter(animeList => animeList.key < 0))
      :
      getAnimeSearch(search)
  }
  console.log(topAnime);
  console.log(search);
  console.log(animeList);

  const deleteText = ({ search, animeList }) => {
    setSearch("")
    setAnimeList(animeList.filter(animeList => animeList.key < 0))
  }


  return (
    <div className="App">
      <Header
        quote={quote}
        getQuote={getQuote}
      />
      <Main
        onDelete={deleteText}
        setSearch={setSearch}
        animeList={animeList}
        setAnimeList={setAnimeList}
        search={search}
        topAnime={topAnime}
        setTopAnime={setTopAnime}
        searchHandler={searchHandler}
      />
    </div>
  );
}

export default App;
