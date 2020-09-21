import React from 'react';

const Detail =({resultVideo})=>{

    if(!resultVideo){
        return <div>Loading...</div>;
    }

    const sourceVideo =`https://www.youtube.com/embed/${resultVideo.id.videoId}` 

    return(
        <div>
            <div className="ui embed">
                <iframe src={sourceVideo} frameborder="0" title="player"></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui attached header">
                    {resultVideo.snippet.title}
                </h4>
                <p>{resultVideo.snippet.description}</p>
            </div>        
        </div>
    ); 
};

export default Detail;


