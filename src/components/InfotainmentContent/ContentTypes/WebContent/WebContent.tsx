import styles from './WebContent.module.css';
import { FunctionComponent, useEffect } from "react";

export type WebContentProps = {
    content: string,
    duration: number,
    onDisplayCompletion: () => void,
};

const WebContent: FunctionComponent<WebContentProps> = ({ content, duration, onDisplayCompletion }) => {
    useEffect(() => {
        const timeout = setTimeout(onDisplayCompletion, duration);
        return () => clearTimeout(timeout);
    }, [duration, onDisplayCompletion]);

    return <iframe
        src={content}
        title="infotainment"
        sandbox="allow-scripts"
        className={styles.infotainment_webcontent}
    />;
};

export default WebContent;
