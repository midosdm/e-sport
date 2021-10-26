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
                <div class="team-header-container">
                    <div class="team-header-item">Logo</div>
                    <div class="team-header-item">Nom</div>
                    <div class="team-header-item">Joueurs</div>
                </div>
                <div class="team-content-container">
                    {
                        team.image_url ? 
                        <div class="team-content-item"><img id="team-image" src={team.image_url}/></div>
                        :
                        <div> Ce team n'a pas de Logo</div>
                    }
                    
                    <div class="team-content-item">{team.name}</div>
                    
                    <div class="team-content-item">
                        { team.players &&
                        team.players.map((player) => (
                            <div key={player.id}>
                                {player.id}
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