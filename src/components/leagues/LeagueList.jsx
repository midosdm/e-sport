import React,{useState, useEffect} from 'react';
import useFetch from './useFetch';
import './league.css';

const LeagueList = () => {
    const {leagues} = useFetch(process.env.LEAGUES_API_URL);

    return (
        <>
        <table>
            <tr>
                <td class="table-title">League ID</td>
                <td class="table-title">League name</td>
                <td class="table-title">League logo</td>
            </tr>
            {
            leagues &&
            leagues.map(league => (
                <>
                    <tr key="league.id">
                        <td>{league.id}</td>
                        <td>{league.name}</td>
                        <td ><img id="logo" src={league.image_url} /></td>
                    </tr>
                </>
            ) 
            )
        }
        </table>
        
        </>
    )
}



export default LeagueList;