import { FunctionComponent, useEffect, useState } from "react";
import ReactPlayer from 'react-player';

export type YouTubeContentProps = {
    content: string
};

const YouTubeContent: FunctionComponent<YouTubeContentProps> = ({ content }) => {
    const [videoID, setVideoID] = useState(content);

    useEffect(() => {
        setVideoID(atob(content));
    }, [content]);

    return <ReactPlayer
        muted
        loop
        playing
        url={videoID}
        width='100%'
        height='100%'
    />;
};

export default YouTubeContent;
