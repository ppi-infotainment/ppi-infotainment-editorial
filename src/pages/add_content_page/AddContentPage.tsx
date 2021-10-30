import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import PageHeaderText from "../../components/PageHeaderText/PageHeaderText";
import styles from './AddContentPage.module.css';
import Dropzone from "./DropZone/DropZone";

const AddContentPage: FunctionComponent = () => {
    // const { deviceId } = useParams<any>();

    // const mockedDevices: Device[] = [
    //     {
    //         id: "1",
    //         description: "Hamburg 5. OG"
    //     },
    //     {
    //         id: "2",
    //         description: "Hamburg Empfang"
    //     },
    //     {
    //         id: "3",
    //         description: "Düsseldorf Küche"
    //     }];

    // const mockedContents: Content[] = [
    //     {
    //         name: "Jahrespräsentation",
    //         type: "Slides"
    //     },
    //     {
    //         name: "bbi Agenda",
    //         type: "Slides"
    //     },
    //     {
    //         name: "Upcoming Events",
    //         type: "Image"
    //     },
    //     {
    //         name: "Introducing: Pong.",
    //         type: "Game"
    //     },
    // ];

    const onFileSelected = () => {
        // ToDos: Implement handling after  file has been uploaded
    };

    const handleOnSave = () => {

    };

    return (
        <Box className={styles.add_content_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <PageHeaderText title="Content zu Geräten hinzufügen" />
            </Box>
            <Box className={styles.content_description_input} sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <TextField label="Filename" variant='outlined'></TextField>
            </Box>
            <Box className={styles.dropzone} sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <Dropzone onFileUploaded={onFileSelected} />
            </Box>
            <Box className={styles.save_button} sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <Button variant='outlined' onClick={handleOnSave}>Speichern</Button>
            </Box>
        </Box>
    );
};

export default AddContentPage;