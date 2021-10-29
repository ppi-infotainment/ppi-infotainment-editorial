import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import Content from "../../../../types/Content";
import styles from './ContentCard.module.css';

export type ContentCardProps = {
    contentElement: Content;
    onDeleteClick: () => void;
};


const ContentCard: FunctionComponent<ContentCardProps> = ({ contentElement }) => {
    return (
        <Box className={styles.content_card} sx={{ minWidth: 275 }}>
            <Card sx={{ minWidth: 400 }} variant='outlined'>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {contentElement.name}
                    </Typography>
                    <Typography sx={{ mb: 0.5, fontWeight: 'bold' }} color="text.secondary">
                        {contentElement.type}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        Content-Typ
                    </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", flexDirection: 'row-reverse'}}>
                    
                    <Button size="small">Löschen</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default ContentCard;