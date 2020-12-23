import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetails';
import useVideo from './hooks/useVideo'


const App = () => {
    const [selectedVideo,setSelectedVideo] = useState(null);
    
    const [video ,search] = useVideo('technology');
    useEffect(() => {
        setSelectedVideo(video[0])
    },[video]);

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return ( 
        <div className = "ui container" style = {{marginTop : '10px'}}>
            <SearchBar onSubmit = {search} /> 
            <div className = "ui grid">   
                <div className = "ui row">
                    <div className = "eleven wide column">
                        <VideoDetail video = {selectedVideo} />
                    </div>
                    <div className = "five wide column">
                        <VideoList videos = {video} onVideoSelect = {onVideoSelect}/>
                    </div>
                    
                </div> 
            </div>
        </div>
        );


}


export default App;