import { useEffect,useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false)
    
    async function fetchData(){
        setLoading(true);
        try{
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url ); 
        const imageSource = data.data.images.downsized_large.url;

        setGif(imageSource);
        }
        catch(error){
            if (error.response.status === 404){
                toast.error("Type in a reasonable tag")
            }
            else if (error.response.status === 429){
                toast.error("Request limit reached! Check again after some time")
            }
            else{
                toast.error("Something went wrong");
            }
            
        }
        finally{
             setLoading(false);
        }
        
    }

    useEffect( () => {
        fetchData();
    },[])

    return {gif, loading, fetchData};
}

export default useGif;