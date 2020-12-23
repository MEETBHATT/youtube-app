import {useState, useEffect} from 'react';
import YouTube from '../APIs/YouTube'

const useVideo = (defaultTerm) => {
    const [videos,setVideos] = useState([]);
    useEffect(() => {
        search(defaultTerm);
    },[defaultTerm]);

    const search = async (term) => {
       const response = await  YouTube.get('/search',{
            params : {
                q : term
            }
        })
    setVideos(response.data.items);

    }

    return [videos,search]
}

export default useVideo;