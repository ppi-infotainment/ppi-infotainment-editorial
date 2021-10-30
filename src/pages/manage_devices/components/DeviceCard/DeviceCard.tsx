import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import styles from './DeviceCard.module.css';

export type DeviceCardProps = {
    deviceName: string;
    deviceId: string;
};

const DeviceCard: FunctionComponent<DeviceCardProps> = ({ deviceName, deviceId }) => {
    const history = useHistory();
    
    const onDeviceContentEditClick = () => {
        history.push('/devices/' + deviceId + "/" + deviceName);
    };

    return (
        <Box className={styles.device_card}>
            <Card sx={{ minWidth: 400 }} variant='outlined'>
                <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        {deviceName}
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        ID: {deviceId}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", flexDirection: 'row-reverse' }}>
                    <Button 
                        variant="outlined"
                        size="small"
                        onClick={onDeviceContentEditClick}
                        >Content für dieses Gerät verwalten</Button>
                </CardActions>
            </Card>
        </Box>);
};


export default DeviceCard;