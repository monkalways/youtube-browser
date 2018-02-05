import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import lodash from 'lodash';

import youtubeSearch from '../youtube/youtube';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
    state = { 
        videos: [],
        selectedVideo: undefined
    }

    search = (term) => {
        youtubeSearch(term, (videos) => {
            this.setState(() => ({ 
                videos, 
                selectedVideo: videos[0] 
            }));
        });
    };

    componentDidMount = () => {
        this.search('justin wei piano lucas');
    }

    handleTermChange = (term) => {
        this.search(term);
    }

    handleVideoSelect = (selectedVideo) => {
        this.setState((prevState) => ({
            selectedVideo: prevState.videos.find((video) => video.id.videoId === selectedVideo.id.videoId)
        }));
    }

    render() {
        const videoSearch = _.debounce((term) => this.handleTermChange(term), 300);
        return (
            <div>
                <Header />
                <br/>
                <Container>
                    <SearchBar onTermChange={videoSearch} />
                    <br/>
                    <Grid>
                        <Grid.Column width={12}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <VideoList videos={this.state.videos} onVideoSelect={this.handleVideoSelect} />
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default App;