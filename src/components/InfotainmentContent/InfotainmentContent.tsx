import { FunctionComponent } from "react";
import ImageContent from './ContentTypes/ImageContent/ImageContent';
import PDFContent from "./ContentTypes/PDFContent/PDFContent";
import WebContent from './ContentTypes/WebContent/WebContent';
import YouTubeContent from "./ContentTypes/YouTubeContent/YouTubeContent";

export type InfotainmentContentProps = {
    filetype: string,
    content: string
};

const InfotainmentContent: FunctionComponent<InfotainmentContentProps> = ({ filetype, content }) => {
    if (filetype === 'image/png') {
        return <ImageContent content={content} />;
    } else if (filetype === 'text/vnd.url') {
        return <WebContent content={content} />;
    } else if (filetype === 'application/vnd.infotainment.externalvideo') {
        return <YouTubeContent content={content} />
    } else if (filetype === 'application/pdf') {
        return <PDFContent content={content} delay={10000} />
    } else {
        return <h1>Uh oh. We do not support this file type!</h1>;
    }
};

export default InfotainmentContent;
