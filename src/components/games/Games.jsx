import React, {useEffect, useState} from 'react';
import './games.css';
import useFetch from '../../custom/useFetch';


const Games = ({handleChange}) => {
    const {data:games} = useFetch(process.env.REACT_APP_VIDEOGAMES_API_URL);

    return (
        <>
            <select 
            id="game-select-list"
            value={localStorage.getItem("selectedGame") ? localStorage.getItem("selectedGame") : "All games"}
            onChange={(handleChange)} >
            
            {games &&
            <>
            <option value="">
                all games
            </option>
                {
                games.map(game =>
                    (
                    <>
                        <option key={game.name} value={game.name}>{game.name}</option>
                    </>
                    ) 
                )
                }
            </>
            }
            </select>
        </>
    )
}

export default Games;