import { Box } from "@mui/system";
import * as React from "react";
import { FunctionComponent } from "react";
import PageHeaderText from "../../components/PageHeaderText/PageHeaderText";
import Device from "../../types/Device";
import DeviceCard from "./components/DeviceCard/DeviceCard";
import styles from './ManageDevicesPage.module.css';

const ManageDevices: FunctionComponent = () => {
    const mockedDevices: Device[] = [
        {
            id: "1",
            description: "Hamburg 5. OG"
        },
        {
            id: "2",
            description: "Hamburg Empfang"
        },
        {
            id: "3",
            description: "Düsseldorf Küche"
    }];

    return (
        <Box className={styles.manage_devices_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <PageHeaderText title="Geräte verwalten" />
            </Box>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                {mockedDevices.map((device) => <DeviceCard deviceName={device.description} key={device.id + "_" + device.description}/>)}
            </Box>
        </Box>
    );
};


export default ManageDevices;