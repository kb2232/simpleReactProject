import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchBar';
import Vidlist from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

//api key from youtube
const API_KEY = 'AIzaSyD9v-4Dvbd87y44ohjj3qDJEdFENGxEUR4';

class APP extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards');
  }

  videoSearch(term) 
  {
    YTSearch({key: API_KEY, term:term}, (videos)=>{
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

  render()
  {
    //allows us delay videosearcht()
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},500);

    return (
      <div>
        <SearchBar onSearchUpdate = {videoSearch} />
        <VideoDetail video = {this.state.selectedVideo} />
        <Vidlist 
        onVideoSelect = {selectedVideo => 
          this.setState({selectedVideo:selectedVideo})
        }
        videos={this.state.videos} />
      </div>
    )
  }
}

ReactDom.render(<APP />,document.querySelector('.app'));