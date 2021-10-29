import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import styles from './DeviceCard.module.css';

export type DeviceCard = {
    deviceName: string;
};

const DeviceCard: FunctionComponent<DeviceCard> = ({ deviceName }) => {

    return (
        <Box className={styles.device_card}>
            <Card sx={{ minWidth: 400 }} variant='outlined'>
                <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        {deviceName}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", flexDirection: 'row-reverse' }}>
                    <Button variant="outlined" size="small">Content für dieses Gerät verwalten</Button>
                </CardActions>
            </Card>
        </Box>);
};


export default DeviceCard;