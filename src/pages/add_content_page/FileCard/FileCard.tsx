import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import styles from './FileCard.module.css';

export type FileCardProps = {
    fileName: string;
    onDeleteClick: () => void
};

const FileCard: FunctionComponent<FileCardProps> = ({ fileName, onDeleteClick }) => {

    return (
        <Box className={styles.device_card}>
            <Card sx={{ minWidth: 400 }} variant='outlined'>
                <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        {fileName}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", flexDirection: 'row-reverse' }}>
                    <Button 
                        variant="outlined"
                        size="small"
                        onClick={onDeleteClick}
                        >Datei löschen</Button>
                </CardActions>
            </Card>
        </Box>);
};


export default FileCard;