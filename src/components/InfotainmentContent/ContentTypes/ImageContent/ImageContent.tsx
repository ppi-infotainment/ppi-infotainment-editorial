import styles from './ImageContent.module.css';
import { FunctionComponent, useEffect, useState } from "react";

export type ImageContentProps = {
    content: string,
    duration: number,
    onDisplayCompletion: () => void,
};

const ImageContent: FunctionComponent<ImageContentProps> = ({ content, duration, onDisplayCompletion }) => {
    const [imageDataURI, setDataURI] = useState(content);

    useEffect(() => {
        const timeout = setTimeout(onDisplayCompletion, duration);
        return () => clearTimeout(timeout);
    });

    useEffect(() => {
        setDataURI(`data:image/png;base64,${content}`);
    }, [content]);

    return <img src={imageDataURI} alt="infotainment" className={styles.infotainment_image} />;
};

export default ImageContent;
