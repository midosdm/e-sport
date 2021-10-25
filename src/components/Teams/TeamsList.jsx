import React from 'react';
import useFetch from '../../custom/useFetch';
import './teams.css';
import {Link} from 'react-router-dom';

const TeamsList = () => {
    const {data: teams} = useFetch(process.env.REACT_APP_TEAMS_API_URL);

    return(
        <>
        <table>
            
            {
            teams &&
            <>
            <tr>
                <td className="table-title">team ID</td>
                <td className="table-title">team name</td>
                <td className="table-title">team logo</td>
            </tr>
            {teams.map(team => (
                <>
                <tr key={team.id}>
                    
                        <td className="table-content">{team.id}</td>
                        <Link to={`/teams/${team.id}`}>
                            <td className="table-content">{team.name}</td>
                        </Link>
                        <td className="table-content"><img id="logo" src={team.image_url} /></td>
                    
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

export default TeamsList;