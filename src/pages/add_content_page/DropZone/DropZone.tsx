import { FunctionComponent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export type DropZoneProps = {
    onFileUploaded: (value: string | ArrayBuffer | null) => void;
};

const Dropzone: FunctionComponent<DropZoneProps> = () => {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file: Blob) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag your files here or click here</p>
        </div>
    );
};

export default Dropzone;