import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import styles from './EditDeviceContentPage.module.css';

const EditDeviceContentPage: FunctionComponent = () => {
    const { id } = useParams<any>();

    return (
        <div className={styles.edit_device_content_page}>
            Hey {id}
        </div>
    );
};

export default EditDeviceContentPage;