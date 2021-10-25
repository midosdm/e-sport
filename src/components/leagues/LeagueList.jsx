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
                <td className="table-title">League ID</td>
                <td className="table-title">League name</td>
                <td className="table-title">League logo</td>
            </tr>
            {leagues.map(league => (
                <>
                <tr key={league.id}>
                    
                        <td className="table-content">{league.id}</td>
                        <Link to={`/leagues/${league.id}`}>
                            <td className="table-content">{league.name}</td>
                        </Link>
                        <td className="table-content"><img id="logo" src={league.image_url} /></td>
                    
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