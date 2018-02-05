import React from 'react';
import { Card } from 'semantic-ui-react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {

    return (
        <Card.Group stackable>
            {videos.map((video) => (
                <VideoListItem video={video} key={video.etag} onClick={onVideoSelect} />
            ))}
        </Card.Group>
    );
}

export default VideoList;