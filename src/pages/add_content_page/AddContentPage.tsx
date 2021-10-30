import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { FunctionComponent, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PageHeaderText from "../../components/PageHeaderText/PageHeaderText";
import { BackendURL } from "../../global/BackendRL/backendUrl";
import styles from './AddContentPage.module.css';
import Dropzone from "./DropZone/DropZone";
import AddContentDto from "./types/AddContentDto";
import InfotainmentFile from "./types/InfotainmentFile";

const AddContentPage: FunctionComponent = () => {
    const [urlValue, setURLValue] = useState<string>();
    const [linkName, setLinkName] = useState<string>();
    const { deviceId, deviceDescription } = useParams<any>();
    const histroy = useHistory();

    const [file, setFile] = useState<InfotainmentFile>();

    const onFileSelected = (file: InfotainmentFile) => {
        setFile(file);
    };

    const handleOnSave = () => {
        if (urlValue && linkName) {
            sendLinkToBackend(linkName, urlValue);
        }

        if (file) {
            sendFileToBackend(file);
        }
        histroy.push(`/devices/${deviceId}/${deviceDescription}`);
    };

    const sendFileToBackend = (file: InfotainmentFile) => {
        const dto: AddContentDto = {
            filename: file.filename,
            content: file.filecontent,
            filetype: getFileType(file.filename)
        };

        axios({
            method: 'post',
            url: `${BackendURL}/editorial/${deviceId}`,
            data: dto
        });
    };

    const getFileType = (filename: string) => {
        const fileEnding = filename.substring(filename.lastIndexOf("."));

        if (fileEnding.includes("pdf")) {
            return 'application/pdf';
        } else {
            return 'image/png';
        }
    };

    const handleURLInputFieldChanged = (e: any) => {
        setURLValue(e.target.value);
    };

    const handleLinkeNameChanged = (e: any) => {
        setLinkName(e.target.value);
    };

    const sendLinkToBackend = (nameOfLink: string, url: string) => {
        const dto: AddContentDto = {
            filename: nameOfLink,
            content: url,
            filetype: urlValue?.includes("youtube") || urlValue?.includes("youtu.be") ?
                'application/vnd.infotainment.externalvideo' : 'application/vnd.infotainment.url'
        };

        
        axios({
            method: 'post',
            url: `${BackendURL}/editorial/${deviceId}`,
            data: dto
        });
    };



    return (
        <Box className={styles.add_content_page}>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <PageHeaderText title="Content zu Geräten hinzufügen" />
            </Box>
            <Box className={styles.dropzone} sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <Dropzone onFileUploaded={onFileSelected} />
            </Box>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <p className={styles.or_text}>oder fügen Sie einen Links ein!</p>
            </Box>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <TextField placeholder="Enter a name for your content" label="Content Name" value={linkName} onChange={handleLinkeNameChanged}></TextField>
            </Box>
            <Box sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <TextField placeholder="Enter your url" label="Url" value={urlValue} onChange={handleURLInputFieldChanged}></TextField>
            </Box>
            <Box className={styles.save_button} sx={{ flexDirection: 'column', display: 'flex', alignContent: 'center', alignSelf: 'center' }}>
                <Button variant='outlined' onClick={handleOnSave}>Speichern</Button>
            </Box>
        </Box>
    );
};

export default AddContentPage;