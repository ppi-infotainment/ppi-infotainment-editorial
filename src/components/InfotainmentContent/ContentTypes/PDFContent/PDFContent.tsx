import styles from './PDFContent.module.css';
import { FunctionComponent, useEffect, useState } from "react";
import useDimensions from "react-cool-dimensions";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Box } from '@mui/system';

export type PDFContentProps = {
    content: string,
    delay: number,
    onDisplayCompletion: () => void,
};

const PDFContent: FunctionComponent<PDFContentProps> = ({ content, delay, onDisplayCompletion }) => {
    const { observe, height, width } = useDimensions();
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [aspectRatio, setAspectRatio] = useState(1920 / 1080);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function onPageLoadSuccess(page: { width: number, height: number }) {
        const newAspectRatio = page.width / page.height;
        setAspectRatio(newAspectRatio);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (pageNumber === numPages) {
                onDisplayCompletion();
            } else {
                setPageNumber(pageNumber + 1);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [delay, numPages, pageNumber, onDisplayCompletion]);

    const containerAspectRatio = width / height;
    const targetAspectRatio = Math.min(containerAspectRatio, aspectRatio);

    const pageHeight = height;
    const pageWidth = height * targetAspectRatio;

    return (
        <div ref={observe} className={styles.infotainment_pdf}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Document
                    file={content}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                        onLoadSuccess={onPageLoadSuccess}
                        pageNumber={pageNumber}
                        width={pageWidth}
                        height={pageHeight}
                        renderAnnotationLayer={false}
                    />
                </Document>
            </Box>
        </div>
    );
};

export default PDFContent;
