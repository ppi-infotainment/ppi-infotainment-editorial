import { Button } from "@mui/material";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";

export type AddContentButtonProps = {
    deviceId: string;
    deviceDescription: string;
};

const AddContentButton: FunctionComponent<AddContentButtonProps> = ({ deviceId, deviceDescription }) => {
    const history = useHistory();

    const onAddContentClick = () => {
        history.push(`/createContents/${deviceId}/${deviceDescription}`);
    };

    return (
        <Button
            variant='contained'
            onClick={onAddContentClick}>
            Neuen Content hinzufügen
        </Button>);

};

export default AddContentButton;
