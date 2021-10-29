import styles from './InfotainmentContent.module.css';
import { FunctionComponent } from "react";
import ImageContent from './ContentTypes/ImageContent/ImageContent';
import WebContent from './ContentTypes/WebContent/WebContent';

export type InfotainmentContentProps = {
    filetype: string,
    content: string
};

const InfotainmentContent: FunctionComponent<InfotainmentContentProps> = ({ filetype, content }) => {
    if (filetype === 'image/png') {
        return <ImageContent content={content} />;
    } else if (filetype === 'text/vnd.url') {
        return <WebContent content={content} />;
    } else {
        return <div>Uh oh. We do not support this file type!</div>;
    }
};

export default InfotainmentContent;
