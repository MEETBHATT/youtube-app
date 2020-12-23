import React from 'react';
import './VideoCard.css'

const VideoCard = ({video, onVideoSelect}) => {
    return (
    
        <div  onClick = {  () => {
            onVideoSelect(video)
        } }  className = "video-item item">
        <img className = "ui image"src = {video.snippet.thumbnails.medium.url}  alt = {video.snippet.description}/>
            <div className = "content">
                <div className = "header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoCard;