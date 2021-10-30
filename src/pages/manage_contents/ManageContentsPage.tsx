import { Box } from "@mui/system";
import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import PageHeaderText from "../../components/PageHeaderText/PageHeaderText";
import { BackendURL } from "../../global/BackendRL/backendUrl";
import Content from "../../types/Content";
import ContentCard from "./components/ContentCard/ContentCard";
import styles from './ManageContentsPage.module.css';

const ManageContents: FunctionComponent = () => {
    const [contents, setContents] = useState<Content[]>([]);

    useEffect(() => {
        axios.get(`${BackendURL}/contents`)
            .then((response) => {
                console.log(JSON.stringify(response));
                const data: Content[] = response.data;
                setContents(data);
            }, (error) => {
                console.log(error);
            });
    }, []);

    const handleDeleteClick = () => {

    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.manage_contents_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <PageHeaderText title="Content verwalten" />
            </Box>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                {contents.map((content) =>
                    <ContentCard
                        contentElement={content}
                        onDeleteClick={handleDeleteClick}
                        key={content.filename + "_" + content.filetype} />)}
                    
            </Box>
        </Box>

    );
};


export default ManageContents;