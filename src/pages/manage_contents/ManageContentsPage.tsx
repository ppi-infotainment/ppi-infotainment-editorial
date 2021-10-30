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

    const handleDeleteClick = (contentName: string) => {
        console.log("trying to delete");
        const newContents = contents.filter((content) => content.filename !== contentName);

        setContents(newContents);
        sendDeleteToBackend(contentName);
    };

    const sendDeleteToBackend = (contentName: string) => {
        axios.delete(`${BackendURL}/editorial/1/${contentName}`)
        .then((response) => {
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.manage_contents_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <PageHeaderText title="Content verwalten" />
            </Box>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                {contents.map((content) =>
                    <ContentCard
                        contentElement={content}
                        onDeleteClick={() => handleDeleteClick(content.filename)}
                        key={content.filename + "_" + content.filetype} />)}
                    
            </Box>
        </Box>

    );
};


export default ManageContents;