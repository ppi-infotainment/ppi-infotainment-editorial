import { FunctionComponent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import InfotainmentFile from '../types/InfotainmentFile';

export type DropZoneProps = {
    onFileUploaded: (file: InfotainmentFile) => void;
};

const Dropzone: FunctionComponent<DropZoneProps> = ({ onFileUploaded }) => {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file: Blob) => {
            const reader = new FileReader()

            reader.onload = () => {

                let fileContent = "";
                if (reader.result !== null) {
                    const binaryStr = reader.result;

                    if (!(binaryStr instanceof ArrayBuffer)) {
                        fileContent = btoa(binaryStr);
                    } else {
                        fileContent = btoa(
                            new Uint8Array(binaryStr)
                                .reduce((data, byte) => data + String.fromCharCode(byte), '')
                        );
                    }
                }

                const fileName = (file as any).path;

                onFileUploaded({ filecontent: fileContent, filename: fileName });
            }
            reader.readAsArrayBuffer(file)
        })

    }, [onFileUploaded])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag your files here or click here</p>
        </div>
    );
};

export default Dropzone;