import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../custom/useFetch';
import './league.css';

const League = () => {
    const {id} = useParams();
    const {data: league} = useFetch(process.env.REACT_APP_LEAGUE_API_URL + '/' + id + '/');

    return (
        <>
        {league &&
        
            <>
            <div class="league-container">
                <div class="league-header-container">
                    <div class="league-header-item">Image</div>
                    <div class="league-header-item">Nom</div>
                    <div class="league-header-item">Site web</div>
                    <div class="league-header-item">Jeu video</div>
                    <div class="league-header-item">Series</div>
                </div>
                <div class="league-content-container">
                    <div class="league-content-item"><img id="league-image" src={league.image_url}/></div>
                    <div class="league-content-item">{league.name}</div>
                    <div class="league-content-item">{league.url?
                        <div>{league.url}</div>
                        :
                        <div>le league n'a pas de site web</div>
                    }
                    </div>
                    <div class="league-content-item">{
                        league.videogame.name
                    }</div>
                    <div class="league-content-item">{
                        league.series.map(series => (
                            <div key={series.id}>
                                {series.full_name}
                            </div>
                        ))
                    }</div>
                </div>
            </div>
            
            </>
        }
        </>
    )
}

export default League;