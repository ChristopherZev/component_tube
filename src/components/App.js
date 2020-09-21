import React from 'react';
import SearchField from './SearchField';
import ListOfVideos from './ListOfVideos';
import Detail from './Detail';
import youtube from '../apis/youtube';




class App extends React.Component{

    state = {
        resultVideos:[],
        videoSelected: null
    };

    onKeywordSubmit= async keyword =>{
        const response = await youtube.get('/search',{
            params:{
                q: keyword
            }
        });

        this.setState({
            resultVideos: response.data.items,
            videoSelected: response.data.items[0]
        });
    };


    onVideoSelect=(resultVideo)=>{
        this.setState({
            videoSelected: resultVideo
        });
    };

    componentDidMount(){
        this.onKeywordSubmit('YouTube Data API');
    }

    render(){
        return(
            <div className="ui container">
                <SearchField onFormSubmit={this.onKeywordSubmit}/>
                <div className="ui stackable grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <Detail resultVideo={this.state.videoSelected}/>
                        </div>
                        <div className="five wide column"> 
                            <ListOfVideos 
                                onVideoSelect={this.onVideoSelect} 
                                resultVideos={this.state.resultVideos}
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default App;
