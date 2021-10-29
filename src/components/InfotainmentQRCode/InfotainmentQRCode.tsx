import { Paper } from "@mui/material";
import { FunctionComponent } from "react";
import QRCode from "react-qr-code";
import styles from './InfotainmentQRCode.module.css';

export type InfotainmentQRCodeProps = {
    authority: string | undefined;
};

const InfotainmentQRCode: FunctionComponent<InfotainmentQRCodeProps> = ({ authority }) => {
    const path = "/";
    const url = authority ? `${authority}${path}` : `${window.location.protocol}//${window.location.host}${path}`;

    return (
        <Paper className={styles.infotainment_qrcode} elevation={4}>
            <QRCode value={url} size={128} />
        </Paper>);
};

export default InfotainmentQRCode;
