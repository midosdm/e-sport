import React from 'react';
import './leagues.css';
import {Link} from 'react-router-dom';
import useFetch from '../../custom/useFetch';

const LeagueList = () => {
    const {data: leagues} = useFetch(process.env.REACT_APP_LEAGUES_API_URL);

    return (
        <>
        <table>
            
            {
            leagues &&
            <>
            <tr>
                <td class="table-title">League ID</td>
                <td class="table-title">League name</td>
                <td class="table-title">League logo</td>
            </tr>
            {leagues.map(league => (
                <>
                
                <tr key="league.id">
                    
                        <td class="table-content">{league.id}</td>
                        <Link to={`/leagues/${league.id}`}>
                            <td class="table-content">{league.name}</td>
                        </Link>
                        <td class="table-content"><img id="logo" src={league.image_url} /></td>
                    
                    </tr>
                </>
            ) 
            )
            }
            </>
        }
        </table>
        
        </>
    )
}



export default LeagueList;