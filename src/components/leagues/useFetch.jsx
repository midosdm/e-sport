import  {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [leagues, setLeagues] = useState();
    const accessToken = '4PCyggc34cOzP8obxiOXox-1Q-72ij77lzc6Mjo4qhGyOAPza5Q';
    useEffect(() => {
        fetch('https://api.pandascore.co/leagues',{
            headers: {
                'Accept' : 'application/json',
                'Authorization' : accessToken
            }
        })
        .then(result => result.json())
        .then(
            (result) => {
                setLeagues(result);
            },
            (err) => {
                console.log(err);
            }
        )
    },[])
    return {
        leagues
    }
}

export default useFetch;