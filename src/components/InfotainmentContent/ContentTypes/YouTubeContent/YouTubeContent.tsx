import styles from './YouTubeContent.module.css';
import { FunctionComponent, useEffect, useState } from "react";
import ReactPlayer from 'react-player';

export type YouTubeContentProps = {
    content: string,
    onDisplayCompletion: () => void,
};

const YouTubeContent: FunctionComponent<YouTubeContentProps> = ({ content, onDisplayCompletion }) => {
    const [videoID, setVideoID] = useState(content);

    useEffect(() => {
        setVideoID(atob(content));
    }, [content]);

    return <ReactPlayer
        muted
        playing
        url={videoID}
        width='100%'
        height='100%'
        className={styles.infotainment_youtube}
        onEnded={onDisplayCompletion}
    />;
};

export default YouTubeContent;
