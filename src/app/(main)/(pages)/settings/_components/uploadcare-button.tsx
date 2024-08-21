"use client"

import React, { useState } from 'react';
import { FileUploaderRegular, OutputCollectionState, OutputCollectionStatus } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

type Props = {
  onUpload?: (files: OutputCollectionState<OutputCollectionStatus, "maybe-has-group">['successEntries']) => void;
};



const UploadCare: React.FC<Props> = ({ onUpload }) => {
  const [files, setFiles] = useState<OutputCollectionState<OutputCollectionStatus, "maybe-has-group">['successEntries']>([]);

  const handleChangeEvent = (event: OutputCollectionState<OutputCollectionStatus, "maybe-has-group">) => {
    const successfulFiles = event.successEntries;
    setFiles(successfulFiles);

    // Call the onUpload callback if provided
    // if (onUpload) {
    //   onUpload(successfulFiles);
    // }
  };

  console.log(files);

  return (
    <div>
      <FileUploaderRegular
         pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY || ''}
         onChange={handleChangeEvent}
         ctx-name="my-uploader"
      />
    </div>
  );
};

export default UploadCare;
