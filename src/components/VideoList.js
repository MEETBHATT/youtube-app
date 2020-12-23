import React from 'react';
import VideCard from './VideoCard'
const VideoList = ({videos,onVideoSelect}) => {

   const resultList = videos.map( video => {
        return <VideCard key = {video.id.videoId} onVideoSelect = {onVideoSelect}  video={video}/>
    });

    return <div className="ui relaxed divided list">{resultList}</div>
}

export default VideoList;