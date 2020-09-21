import React from 'react';
import Video from './Video'
const ListOfVideos = ({resultVideos, onVideoSelect})=>{

    const listRendered = resultVideos.map((resultVideo)=>{
        return(
            <Video onVideoSelect={onVideoSelect} resultVideo={resultVideo} key={resultVideo.id.videoId}/>
        ); 
    });
return <div className="ui relaxed divided list">{listRendered}</div>


}

export default ListOfVideos;