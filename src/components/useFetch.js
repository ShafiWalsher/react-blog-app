import {useState, useEffect} from "react";

// Custom hook, use keyword
const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    // Runs everytime a page renders, if depedencies are not mentioned
    useEffect(() => {
        const abortConst = new AbortController();

        fetch(url, {signal: abortConst.signal})
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data from resource!')
                }
                return res.json()
            })
            .then(data => {
                // successfully got the data from json server
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortyError'){
                    console.log('Abort Error')
                } else{
                    setError(err.message);
                    setIsPending(false);
                }
                
            });
        return () => abortConst.abort();

    }, [url]); // Dependecy array

    return {data, isPending, error};
}
 
export default useFetch;