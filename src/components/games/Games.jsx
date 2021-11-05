import React, {useEffect, useState} from 'react';
import './games.css';
// import {useSelector, useDispatch} from 'react-redux';
// import {
//     gamesAsync,
//     gamesSelector,
//     selectGame
// } from '../../features/games/gamesSlice';
import useFetch from '../../custom/useFetch';


const Games = ({handleChange}) => {
    // const {selectedGame, games} = useSelector(gamesSelector);
    // const dispatch = useDispatch();
    // useEffect(() =>{
    //     dispatch(gamesAsync());
    // }, [dispatch])
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
            {/* <ContextSelectedGame.Provider value={{selectedGame, setSelectedGame}}>
                <div>
                    <LeagueList />
                </div>
            </ContextSelectedGame.Provider> */}
        </>
    )
}

export default Games;