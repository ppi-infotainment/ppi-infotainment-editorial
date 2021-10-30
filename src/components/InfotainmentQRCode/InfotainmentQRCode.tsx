import { Paper } from "@mui/material";
import useAxios from "axios-hooks";
import { FunctionComponent } from "react";
import QRCode from "react-qr-code";
import styles from './InfotainmentQRCode.module.css';

export type InfotainmentQRCodeProps = {
    authority: string | undefined;
    id: string;
};

const InfotainmentQRCode: FunctionComponent<InfotainmentQRCodeProps> = ({ authority, id }) => {
    const endpoint = `https://us-central1-ppi-infotainment.cloudfunctions.net/v1/editorial/${id}/description`;
    const [{ data, loading, error }] = useAxios(endpoint);

    if (loading || error) return <></>; 
    const path = `/devices/${id}/${data.description}`;
    const url = authority ? `${authority}${path}` : `${window.location.protocol}//${window.location.host}${path}`;

    return (
        <Paper className={styles.infotainment_qrcode} elevation={4}>
            <QRCode value={url} size={128} />
        </Paper>);
};

export default InfotainmentQRCode;
