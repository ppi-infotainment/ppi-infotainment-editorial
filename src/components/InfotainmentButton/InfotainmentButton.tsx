import { Button } from "@mui/material";
import * as react from "react";
import { FunctionComponent } from "react";
import styles from './InfotainmentButton.module.css';


export type InfotainmentButtonProps = {
    onClick: () => void;
    text: string;
};

const InfotainmentButton: FunctionComponent<InfotainmentButtonProps> = ({ onClick, text }) => {
    return (
        <div className={styles.infotainment_button}>
            <Button onClick={onClick} variant="outlined">{text}</Button>
        </div>);
};

export default InfotainmentButton;