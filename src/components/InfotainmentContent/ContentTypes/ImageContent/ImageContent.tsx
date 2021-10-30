import styles from './ImageContent.module.css';
import { FunctionComponent, useEffect } from "react";

export type ImageContentProps = {
    content: string,
    duration: number,
    onDisplayCompletion: () => void,
};

const ImageContent: FunctionComponent<ImageContentProps> = ({ content, duration, onDisplayCompletion }) => {
    useEffect(() => {
        const timeout = setTimeout(onDisplayCompletion, duration);
        return () => clearTimeout(timeout);
    }, [duration, onDisplayCompletion]);

    return <img src={content} alt="infotainment" className={styles.infotainment_image} />;
};

export default ImageContent;
