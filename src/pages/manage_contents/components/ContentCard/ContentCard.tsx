import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import Content from "../../../../types/Content";
import styles from './ContentCard.module.css';

export type ContentCardProps = {
    contentElement: Content;
    onDeleteClick: () => void;
};


const ContentCard: FunctionComponent<ContentCardProps> = ({ contentElement, onDeleteClick }) => {
    return (
        <Box className={styles.content_card} sx={{ minWidth: 275 }}>
            <Card sx={{ minWidth: 400 }} variant='outlined'>
                <CardContent>
                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        {contentElement.filename}
                    </Typography>
                    <Typography sx={{ mb: 0.5, fontWeight: 'bold' }} color="text.secondary">
                        {contentElement.filetype}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        Content-Typ
                    </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", flexDirection: 'row-reverse'}}>
                    <Button onClick={onDeleteClick} size="small">Löschen</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default ContentCard;