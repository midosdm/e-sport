import React, {useState, useEffect,useContext} from 'react';
import './leagues.css';
import {Link} from 'react-router-dom';
import useFetch from '../../custom/useFetch';
import contextSelectedGame from '../../context/Context';
import ReactPaginate from 'react-paginate';
import '../pagination/pagination.css'

const LeagueList = () => {
    const {data} = useFetch(process.env.REACT_APP_LEAGUES_API_URL);
    const [leagues, setLeagues] = useState();
    const {selectedGame} = useContext(contextSelectedGame);

    useEffect(()=> {
        if(data && localStorage.getItem("selectedGame") != ""){
            const results = data.filter((league)=>{
                        return league.videogame.name.startsWith(localStorage.getItem('selectedGame'));
                    })
                    setLeagues(results);
        } else{
            setLeagues(data);
        }
        
    }, [data,selectedGame]);

    const[pageNumber, setPageNumber] = useState(0);

    const leaguesPerPage = 5;
    const pagesVisited = pageNumber * leaguesPerPage;

    const displayLeagues = leagues ? leagues.slice(pagesVisited, pagesVisited + leaguesPerPage)
    .map(league => {
        return (
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
        )
    }) : "";

    const pageCount = leagues ? Math.ceil(leagues.length / leaguesPerPage) : 0;
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <>
         <div class="page-title">
         <h2>Leagues:</h2>
         </div>

         <div>
            {displayLeagues}
         </div>
            
         <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount = {pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationButtons'}
                    previousLinkClassName = {"previousButton"}
                    nextLinkClassName = {"previousButton"}
                    disabledClassName = {"paginationDisabled"}
                    activeClassName = {"paginationActive"}
                />

        </>
    )
}



export default LeagueList;