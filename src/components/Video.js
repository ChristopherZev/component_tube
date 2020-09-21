import './Video.css';
import React from 'react';

const Video = ({resultVideo, onVideoSelect})=>{
    return( 
        <div onClick={()=>onVideoSelect(resultVideo)} className="video item">
            <img className= "ui image" src={resultVideo.snippet.thumbnails.medium.url} alt={resultVideo.snippet.title}/>
            <div className="content">
                <div className="header">
                    {resultVideo.snippet.title}
                </div>
            </div> 
        </div>

    );
};

export default Video;