import styles from './YouTubeContent.module.css';
import { FunctionComponent } from "react";
import ReactPlayer from 'react-player';

export type YouTubeContentProps = {
    content: string,
    onDisplayCompletion: () => void,
};

const YouTubeContent: FunctionComponent<YouTubeContentProps> = ({ content, onDisplayCompletion }) => {
    return <ReactPlayer
        muted
        playing
        url={content}
        width='100%'
        height='100%'
        className={styles.infotainment_youtube}
        onEnded={onDisplayCompletion}
    />;
};

export default YouTubeContent;
