import styles from './ImageContent.module.css';
import { FunctionComponent, useEffect, useState } from "react";

export type ImageContentProps = {
    content: string
};

const ImageContent: FunctionComponent<ImageContentProps> = ({ content }) => {
    const [imageDataURI, setDataURI] = useState(content);

    useEffect(() => {
        setDataURI(`data:image/png;base64,${content}`);
    }, [content]);

    return <img src={imageDataURI} alt="infotainment" className={styles.infotainment_image} />;
};

export default ImageContent;
