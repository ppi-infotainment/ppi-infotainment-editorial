import { FunctionComponent, useEffect, useState } from "react";
import useAxios from 'axios-hooks'
import InfotainmentContent from "../InfotainmentContent/InfotainmentContent";
import InfotainmentCarousel from "../InfotainmentCarousel/InfotainmentCarousel";

export type RemoteInfotainmentProps = {
    systemId: string;
    duration: number;
};

const RemoteInfotainment: FunctionComponent<RemoteInfotainmentProps> = ({ systemId, duration }) => {
    const endpoint = `https://us-central1-ppi-infotainment.cloudfunctions.net/v1/editorial/${systemId}/full`;
    const [{ data }, refetch] = useAxios(endpoint);
    const [content, setContent] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(refetch, 8000);

        return () => clearTimeout(timeout);
    }, [data, refetch]);

    useEffect(() => {
        const timeout = setTimeout(refetch, 10 * 60 * 1000);
        return () => clearTimeout(timeout);
    }, [refetch]);

    useEffect(() => {
        if (data !== undefined) {
            const previousMappedContent: any = {};
            const mappedContent: any = {};

            data.forEach((value: any) => {
                mappedContent[value.filename] = { content: value.content, filetype: value.filetype };
            });
            
            content.forEach((value: any) => {
                previousMappedContent[value.filename] = { content: value.content, filetype: value.filetype };
            });
            
            if (previousMappedContent.length !== mappedContent.length) {
                setContent(data);
            } else {
                const keys = Array.from(new Set(Object.keys(mappedContent).concat(Object.keys(previousMappedContent))));
                const matches = keys.reduce((prev, key) => {
                    if (!mappedContent.hasOwnProperty(key) || !previousMappedContent.hasOwnProperty(key)) {
                        return false;
                    }

                    const contentMatches = mappedContent[key].content === previousMappedContent[key].content;
                    const filetypeMatches = mappedContent[key].filetype === previousMappedContent[key].filetype;

                    return prev && contentMatches && filetypeMatches;
                }, true);

                if (!matches) setContent(data);
            }
        }
    }, [data, content]);
    
    return <InfotainmentCarousel>
        {content.map((entry: any, index: number) => {
            return <InfotainmentContent key={index} filetype={entry.filetype} content={entry.content} duration={duration} onDisplayCompletion={() => {}} />
        })}
    </InfotainmentCarousel>
};

export default RemoteInfotainment;
