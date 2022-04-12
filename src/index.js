import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = 'AIzaSyDIgKiv-Z2WfUA7EN58EYrO32-ctofcf8E'

// Create a new component. This component should produce some html
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        // videos is data returned from API call
        YTSearch({ key: API_KEY, term: term}, videos => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
                });
        })
    }

    render() {
        // calls search once every 300 milliseconds
        const videoSearch = _.debounce(term => {this.videoSearch(term), 300})

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={ this.state.videos }
                />
            </div>
        );
    }
}

// Take component's generated html and put on page
ReactDOM.render(<App />, document.querySelector('.container')); //<App /> is instance of App class or component
