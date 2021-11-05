import React from 'react';
import {useParams, Link} from 'react-router-dom';
import useFetch from '../../custom/useFetch';
import './league.css'
const League = () => {
    const {id} = useParams();
    const {data: league} = useFetch(process.env.REACT_APP_LEAGUE_API_URL + '/' + id);

    return (
        <>
        {league &&
        
            <>
            <div class="league-container">
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

                        <div class="item">
                                {league.url?
                                <div><span class="label">Site:</span>{league.url}</div>
                            :
                            <div>le league n'a pas de site web</div>
                            }
                        </div>
                    <div class="item"><span class="label">Game:</span>{
                        league.videogame.name
                    }</div>
                    
                    
                </div>

                <div class="series-container">
                <div class="series-item"> {
                        league.series.map(series => (
                            <>
                            <div key={series.id}>
                            <span class="label">Series:</span>{series.full_name}
                            </div>
                            </>
                        ))
                    }</div>
                    {
                        league.series &&
                        <div class="series-item">
                            {league.series.map((series) => (
                                <>
                                    <div key={series.id}>
                                        {series.winner_id ? 
                                        <Link to={`/teams/${series.winner_id}`}>
                                            <span class="winner-label">Vainqueur</span>
                                        </Link>
                                        :
                                        <div>le vainqueur de cette serie est inconnu</div>
                                        }
                                    </div>
                                </>
                            ))   
                            }  
                        
                        </div>
                    }
                    </div>


            
            </>
        }
        </>
    )
}

export default League;