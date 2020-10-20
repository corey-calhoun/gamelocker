import React, { useState, useEffect } from 'react'
import axios from '../../axios'
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

    // const handleClick = (game) => {
    //     if()
    // }

    return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className='row__posters'>
                {games.map(game => (
                <img 
                 key={game.id}
                //  onClick={() => handleClick(game)}
                 className={`poster ${isLargeRow && "posterLarge"}`}
                 src={`${base_url}${isLargeRow ? game.cover_id : game.image_id}`} 
                 alt={game.name}
                />
                ))}
            </div>
        </div>
    )
}

export default Row
