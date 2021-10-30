import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router";
import PageHeaderText from "../../components/PageHeaderText/PageHeaderText";
import AddContentButton from "./components/AddContentButton/AddContentButton";
import styles from './EditDeviceContentPage.module.css';
import {
    List,
    arrayMove,
    arrayRemove
} from "baseui/dnd-list";
import { Box } from "@mui/system";
import { BackendURL } from "../../global/BackendRL/backendUrl";
import axios from "axios";
import Content from "../../types/Content";

const EditDeviceContentPage: FunctionComponent = () => {
    const { id, description } = useParams<any>();
    const [contents, setContents] = useState<Content[]>();

    const [listItems, setListItems] = useState<string[]>();

    useEffect(() => {
        axios.get(`${BackendURL}/editorial/${id}`)
            .then((response) => {
                const data: Content[] = response.data;
                setContents(data);
                setListItems(data.map((c) => c.filename));
            }, (error) => {
                console.log(error);
            });
    }, [id, description]);

    useEffect(() => {
        const newContens = contents?.filter((con) =>  listItems?.includes(con.filename) );
        const contentsToDelete = contents?.filter((con) => !listItems?.includes(con.filename));

        contentsToDelete?.forEach(c => deleteContentItem(c));

        setContents(newContens);
    }, [listItems]);

    const deleteContentItem = (content: Content) => {
        axios.delete(`${BackendURL}/editorial/${id}/${content.filename}`)
        .then((response) => {
        }, (error) => {
            console.log(error);
        });
    };

    return (
        <div className={styles.edit_device_content_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <PageHeaderText title={description + " bearbeiten"} />
                <Box sx={{ maxWidth: "400px" }}>
                    <List
                        removable
                        items={listItems}
                        onChange={({ oldIndex, newIndex }) => {
                            if (listItems !== undefined) {
                                setListItems(
                                    newIndex === -1
                                        ? arrayRemove(listItems, oldIndex)
                                        : arrayMove(listItems, oldIndex, newIndex)
                                )
                            }
                        }
                        }
                    />
                </Box>
                <AddContentButton deviceId={id} deviceDescription={description} />
            </Box>
        </div>

    );
};

export default EditDeviceContentPage;
