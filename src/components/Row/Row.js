import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import requests from '../../requests';
import './Row.css'

const base_url = "https://api.igdb.com/v4"

function Row( title, fetchUrl, isLargeRow) {

    const [games, setGames] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = axios.get(fetchUrl);
            setGames(request.data.results);
            return request;
        }
         fetchData();
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className='row__posters'>
                {games.map(game => (
                <img 
                 key={game.id}
                //  onClick={() => handleClick(game)}
                 className={`poster ${isLargeRow && "posterLarge"}`}
                 src={`${base_url}${isLargeRow ? game.poster_path : game.backdrop_path}`} 
                 alt={game.name}
                />
                ))}
            </div>
        </div>
    )
}

export default Row
