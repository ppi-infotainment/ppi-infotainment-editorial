import { Button } from "@mui/material";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";

export type AddContentButtonProps = {
    deviceId: string;
};

const AddContentButton: FunctionComponent<AddContentButtonProps> = ({ deviceId }) => {
    const history = useHistory();

    const onAddContentClick = () => {
        history.push(`/createContents/${deviceId}`);
    };

    return (
        <Button
            variant='contained'
            onClick={onAddContentClick}>
            Neuen Content hinzufügen
        </Button>);

};

export default AddContentButton;
