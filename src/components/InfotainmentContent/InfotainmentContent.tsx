import { FunctionComponent } from "react";
import ImageContent from './ContentTypes/ImageContent/ImageContent';
import PDFContent from "./ContentTypes/PDFContent/PDFContent";
import WebContent from './ContentTypes/WebContent/WebContent';
import YouTubeContent from "./ContentTypes/YouTubeContent/YouTubeContent";

export type InfotainmentContentProps = {
    filetype: string,
    content: string,
    duration: number,
    onDisplayCompletion: () => void,
};

const InfotainmentContent: FunctionComponent<InfotainmentContentProps> = ({ filetype, content, duration, onDisplayCompletion }) => {
    if (filetype === 'image/png') {
        return <ImageContent content={content} duration={duration} onDisplayCompletion={onDisplayCompletion} />;
    } else if (filetype === 'application/vnd.infotainment.url') {
        return <WebContent content={content} duration={duration} onDisplayCompletion={onDisplayCompletion} />;
    } else if (filetype === 'application/vnd.infotainment.externalvideo') {
        return <YouTubeContent content={content} onDisplayCompletion={onDisplayCompletion} />
    } else if (filetype === 'application/pdf') {
        return <PDFContent content={content} delay={duration} onDisplayCompletion={onDisplayCompletion} />
    } else {
        return <h1>Uh oh. We do not support this file type!</h1>;
    }
};

export default InfotainmentContent;
