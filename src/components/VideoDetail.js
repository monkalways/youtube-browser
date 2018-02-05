import React from 'react';
import { Dimmer, Embed, Header, Loader, Segment } from 'semantic-ui-react';


const VideoDetail = ({ video }) => {
    let videoId, thumbnail, title, description;

    if(!!video) {
        videoId = video.id.videoId;
        thumbnail = video.snippet.thumbnails.high.url;
        title = video.snippet.title;
        description = video.snippet.description;
    }

    return (
        <Segment>
            <Dimmer active={!video}>
                <Loader>Loading</Loader>
            </Dimmer>
            { !!video && (
                <div>
                    <Embed
                        id={videoId}
                        placeholder={thumbnail}
                        source='youtube'
                    />
                    <Header>{title}</Header>
                    <p>{description}</p>
                </div>
            )}
        </Segment>    
    );
}

export default VideoDetail;