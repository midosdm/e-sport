import React, {useState, useEffect,useContext} from 'react';
import './leagues.css';
import {Link} from 'react-router-dom';
import useFetch from '../../custom/useFetch';
import contextSelectedGame from '../../context/Context';
import Pagination from '../pagination/Pagination';

const LeagueList = () => {
    const {data} = useFetch(process.env.REACT_APP_LEAGUES_API_URL);
    const [leagues, setLeagues] = useState();
    const {selectedGame} = useContext(contextSelectedGame);

    //------------pagination declaration start -----------

    const [currentPage, setCurrentPage] = useState(1);
    const [leaguesPerPage, setLeaguesPerPage] = useState(5);
    
    //GET CURRENT LEAGUES PER PAGE
    // const indexOfLastLeague = currentPage * leaguesPerPage;
    // const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;
    // const currentLeagues= data ? leagues.slice(indexOfFirstLeague, indexOfLastLeague) : console.log();

    //-----------Pagination declaration end -----------


    useEffect(()=> {
        if(data && localStorage.getItem("selectedGame") != ""){
            const results = data.filter((league)=>{
                        return league.videogame.name.startsWith(localStorage.getItem('selectedGame'));
                    })
                    setLeagues(results);
        } else{
            setLeagues(data);
        }
        
    }, [data, selectedGame]);


    return (
        <>
         <div class="page-title">
         <h2>Leagues:</h2>
         </div>
         
            {
            leagues &&
            
            <>{leagues.map(league=>(
                
                    <>
                    <div class="container">
                        <div class="item">
                        <img
                            id="logo"
                            src={league.image_url}
                            alt="logo"
                        />
                        </div>
                        
                        <div class="item">
                            <h1>{league.name}</h1> 
                        </div>
                        <Link to={`/leagues/${league.id}`}>
                        <div class="item">
                            <button id="btn">view details <i class="fa fa-arrow-right"></i></button>
                        </div>
                        </Link>
                    </div>
                </>
            ))}</>
        }

        {/* { currentLeagues && <Pagination leagues={currentLeagues} /> } */}

        </>
    )
}



export default LeagueList;