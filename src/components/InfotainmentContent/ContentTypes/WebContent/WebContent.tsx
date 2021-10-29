import styles from './WebContent.module.css';
import { FunctionComponent, useEffect, useState } from "react";

export type WebContentProps = {
    content: string
};

const WebContent: FunctionComponent<WebContentProps> = ({ content }) => {
    const [webURL, setWebURL] = useState(content);

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
