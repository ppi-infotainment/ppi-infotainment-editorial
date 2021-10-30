import { FunctionComponent, useEffect } from "react";
import useAxios from 'axios-hooks'
import InfotainmentContent from "../InfotainmentContent/InfotainmentContent";
import InfotainmentCarousel from "../InfotainmentCarousel/InfotainmentCarousel";

export type RemoteInfotainmentProps = {
    systemId: string;
    duration: number;
};

const RemoteInfotainment: FunctionComponent<RemoteInfotainmentProps> = ({ systemId, duration }) => {
    const endpoint = `https://us-central1-ppi-infotainment.cloudfunctions.net/v1/editorial/${systemId}/full`;
    const [{ data, loading, error }, refetch] = useAxios(endpoint)

    useEffect(() => {
        const timeout = setTimeout(refetch, 10 * 60 * 1000);
        return () => clearTimeout(timeout);
    }, [refetch]);

    if (loading) return <p>Fetching content...</p>
    if (error) return <p>Failed to fetch content! {error.toString()}</p>

    return <InfotainmentCarousel>
        {data.map((entry: any, index: number) => {
            return <InfotainmentContent key={index} filetype={entry.filetype} content={entry.content} duration={duration} onDisplayCompletion={() => {}} />
        })}
    </InfotainmentCarousel>
};

export default RemoteInfotainment;
