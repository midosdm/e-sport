import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../custom/useFetch';

const League = () => {
    const {id} = useParams();
    const {data: league} = useFetch(process.env.REACT_APP_LEAGUE_API_URL + '/' + id + '/');

    return (
        <>
        {league &&
        
            <>
            <div>{league.name}</div>
            </>
        }
        </>
    )
}

export default League;