import React,{useState, useEffect, useContext} from 'react';
import useFetch from '../../custom/useFetch';
import './teams.css';
import {Link} from 'react-router-dom';
import contextSelectedGame from '../../context/Context';
import ReactPaginate from 'react-paginate';
import '../pagination/pagination.css';
const TeamsList = () => {
    const {data} = useFetch(process.env.REACT_APP_TEAMS_API_URL);
    const [teams, setTeams] = useState();
    const {selectedGame} = useContext(contextSelectedGame);

    useEffect(()=> {
        if(data && localStorage.getItem("selectedGame")){
            const results = data.filter((team)=>{
                        return team.current_videogame.name.startsWith(localStorage.getItem('selectedGame'));
                    })
                    setTeams(results);
        } else{
            setTeams(data);
        }
        
    }, [data, selectedGame]);

    const[pageNumber, setPageNumber] = useState(0);

    const teamsPerPage = 5;
    const pagesVisited = pageNumber * teamsPerPage;

    const displayTeams = teams ? teams.slice(pagesVisited, pagesVisited + teamsPerPage).map((team) => {
        return (
            <>
            <div class="container">
                        <div class="item">
                        <img
                            id="logo"
                            src={team.image_url}
                            alt="logo"
                        />
                        </div>
                        
                        <div class="item">
                            <h1>{team.name}</h1> 
                        </div>
                        <Link to={`/teams/${team.id}`}>
                        <div class="item">
                            <button id="btn">view details <i class="fa fa-arrow-right"></i></button>
                        </div>
                        </Link>
                    </div>
            </>
        )
    }): "";

    const pageCount = teams ? Math.ceil(teams.length / teamsPerPage) : 0;
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return(
        <>
       <div class="page-title">
         <h2>Teams:</h2>
         </div>
         
         <div>
             {displayTeams}
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

export default TeamsList;