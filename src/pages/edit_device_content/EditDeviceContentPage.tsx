import { FunctionComponent, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeaderText from "../../components/PageHeaderText/PageHeaderText";
import AddContentButton from "./components/AddContentButton/AddContentButton";
import styles from './EditDeviceContentPage.module.css';
import {
    List,
    arrayMove,
    arrayRemove
} from "baseui/dnd-list";
import { Box } from "@mui/system";

const EditDeviceContentPage: FunctionComponent = () => {
    const { id, description } = useParams<any>();
    const [items, setItems] = useState([
        "Never gonna give you up",
        "PPI Talks",
        "BBI"
    ]);

    return (
        <div className={styles.edit_device_content_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <PageHeaderText title={description + " bearbeiten"} />
                <Box sx={{ maxWidth: "400px" }}>
                    <List
                        removable
                        items={items}
                        onChange={({ oldIndex, newIndex }) =>
                            setItems(
                                newIndex === -1
                                    ? arrayRemove(items, oldIndex)
                                    : arrayMove(items, oldIndex, newIndex)
                            )
                        }
                    />
                </Box>
                <AddContentButton deviceId={id} />
            </Box>
        </div>

    );
};

export default EditDeviceContentPage;

