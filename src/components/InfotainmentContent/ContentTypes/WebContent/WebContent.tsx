import styles from './WebContent.module.css';
import { FunctionComponent, useEffect, useState } from "react";

export type WebContentProps = {
    content: string,
    duration: number,
    onDisplayCompletion: () => void,
};

const WebContent: FunctionComponent<WebContentProps> = ({ content, duration, onDisplayCompletion }) => {
    const [webURL, setWebURL] = useState(content);

    useEffect(() => {
        const timeout = setTimeout(onDisplayCompletion, duration);
        return () => clearTimeout(timeout);
    });

    useEffect(() => {
        setWebURL(atob(content));
    }, [content]);

    return <iframe
        src={webURL}
        title="infotainment"
        sandbox="allow-scripts"
        className={styles.infotainment_webcontent}
    />;
};

export default WebContent;
