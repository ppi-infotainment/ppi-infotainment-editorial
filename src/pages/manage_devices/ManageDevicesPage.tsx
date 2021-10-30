import { Box } from "@mui/system";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import PageHeaderText from "../../components/PageHeaderText/PageHeaderText";
import { BackendURL } from "../../global/BackendRL/backendUrl";
import Device from "../../types/Device";
import DeviceCard from "./components/DeviceCard/DeviceCard";
import styles from './ManageDevicesPage.module.css';

const ManageDevices: FunctionComponent = () => {
    const [devices, setDevices] = useState<Device[]>([]);

    useEffect(() => {
        axios.get(`${BackendURL}/editorial`)
            .then((response) => {
                const data: Device[] = response.data;
                setDevices(data);
            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <Box className={styles.manage_devices_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <PageHeaderText title="Geräte verwalten" />
            </Box>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                {devices.map((device) =>
                    <DeviceCard
                        deviceId={device.systemId}
                        deviceName={device.description}
                        key={device.systemId + "_" + device.description}
                    />)}
            </Box>
        </Box>
    );
};


export default ManageDevices;