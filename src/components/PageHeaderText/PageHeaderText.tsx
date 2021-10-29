import * as react from "react";
import { FunctionComponent } from "react";
import styles from './PageHeaderText.module.css';

export type PageHeaderTextProps = {
    title: string;
};

const PageHeaderText: FunctionComponent<PageHeaderTextProps> = ({ title }) => {
    return <p className={styles.page_header}>{title}</p>
};

export default PageHeaderText;