import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import moment from 'moment';

const VideoListItem = ({ video, onClick }) => {
    const publishedAtStr = moment(video.snippet.publishedAt).format('MMM Do, YYYY, h:mm:ss a');
    return (
        <Card onClick={() => onClick(video)}>
            <Image src={video.snippet.thumbnails.medium.url} />
            <Card.Content>
                <Card.Header>{video.snippet.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>
                        {publishedAtStr}
                    </span>
                </Card.Meta>
            </Card.Content>
        </Card>
    );
}

export default VideoListItem;