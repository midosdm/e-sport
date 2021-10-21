import  {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();
    const accessToken = '4PCyggc34cOzP8obxiOXox-1Q-72ij77lzc6Mjo4qhGyOAPza5Q';
    useEffect(() => {
        fetch(url,{
            headers: {
                'Accept' : 'application/json',
                'Authorization' : accessToken
            }
        })
        .then(result => result.json())
        .then(
            (result) => {
                setData(result);
            },
            (err) => {
                console.log(err);
            }
        )
    },[])
    return {
        data
    }
}

export default useFetch;