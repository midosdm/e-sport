import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    gamesAsync,
    gamesSelector,
    selectGame
} from '../../features/games/gamesSlice';
import useFetch from '../../custom/useFetch';
import LeagueList from '../leagues/LeagueList';


export const ContextSelectedGame =React.createContext("");

const Games = () => {
    // const {selectedGame, games} = useSelector(gamesSelector);
    // const dispatch = useDispatch();
    // useEffect(() =>{
    //     dispatch(gamesAsync());
    // }, [dispatch])
    const {data:games} = useFetch('https://api.pandascore.co/videogames');

    const [selectedGame, setSelectedGame] = useState("");

     const handleChange = (e) => {
        //  dispatch(selectGame(e.target.value));
        setSelectedGame(e.target.value);
     }


    

    return (
        <>
            <select 
            id="game-select-list"
            value={selectedGame}
            onChange={(handleChange)} >
            <option value="">All games</option>
            {games &&
                games.map(game =>
                    (
                    <>
                        <option key={game.name} value={game.name}>{game.name}</option>
                    </>
                    ) 
                )
            }
            </select>
            <ContextSelectedGame.Provider value={{selectedGame, setSelectedGame}}>
                <div>
                    <LeagueList />
                </div>
            </ContextSelectedGame.Provider>
        </>
    )
}

export default Games;