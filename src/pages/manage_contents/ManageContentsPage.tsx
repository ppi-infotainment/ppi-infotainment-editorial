import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import Content from "../../types/Content";
import ContentCard from "./components/ContentCard/ContentCard";
import styles from './ManageContentsPage.module.css';

const ManageContents: FunctionComponent = () => {
    const mockedData: Content[] = [
        {
            name: "Jahrespräsentation",
            type: "Slides"
        },
        {
            name: "bbi Agenda",
            type: "Slides"
        },
        {
            name: "Upcoming Events",
            type: "Image"
        },
        {
            name: "Introducing: Pong.",
            type: "Game"
        },
    ];

    const handleDeleteClick = () => {

    };

    return (
        <div className={styles.manage_contents_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                {mockedData.map((content) => 
                <ContentCard 
                    contentElement={content}
                    onDeleteClick={handleDeleteClick}
                    key={content.name + "_" + content.type}/>)}
            </Box>
        </div>

    );
};


export default ManageContents;