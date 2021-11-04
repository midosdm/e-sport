import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../custom/useFetch';
import './team.css';

const Team = () => {
    const {id} = useParams();
    const {data: team} = useFetch(process.env.REACT_APP_TEAM_API_URL + "/" + id);

    return(
        <>
        {
            team &&
            <div class="team-container">
                
                <div class="team-item">
                    {
                        team.image_url ? 
                        <img id="team-image" src={team.image_url}/>
                        :
                        <div> Ce team n'a pas de Logo</div>
                    }
                    
                    <div class="team-item"><h1>{team.name}</h1></div>
                    
                    <div class="team-item">
                        <h1>Les joueurs:</h1>
                        { team.players &&
                        team.players.map((player) => (
                            <div key={player.id}>
                                {player.first_name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Team;