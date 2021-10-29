import { Box } from "@mui/material";
import * as React from "react";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";
import InfotainmentButton from "../../components/InfotainmentButton/InfotainmentButton";
import styles from './Homepage.module.css';

const HomePage: FunctionComponent = () => {
    const history = useHistory();

    const onManageContentClicked = () => {
        history.push('/contents');
    };

    const onManageDevicesClicked = () => {
        history.push('/devices');
    };

    return (
        <div className={styles.homepage}>
            <Box sx={{ display: 'flex' }}>
                <InfotainmentButton text="Content verwalten" onClick={onManageContentClicked} />
                <InfotainmentButton text="Devices vewalten" onClick={onManageDevicesClicked} />
            </Box>
        </div>
    );
};


export default HomePage;