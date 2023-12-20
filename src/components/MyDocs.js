// src/components/FileUploadButton.js
import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';

const FileUploadButton = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storageRef = storage.ref();
        const filesList = await storageRef.listAll();

        const filesArray = await Promise.all(
          filesList.items.map(async (fileRef) => {
            const downloadURL = await fileRef.getDownloadURL();
            return { name: fileRef.name, downloadURL };
          })
        );

        setFiles(filesArray);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const storageRef = ref(storage, `uploads/${selectedFile.name}`);

      try {
        await uploadBytes(storageRef, selectedFile);

        const updatedFilesList = await storageRef.parent.listAll();
        const updatedFilesArray = await Promise.all(
          updatedFilesList.items.map(async (fileRef) => {
            const downloadURL = await fileRef.getDownloadURL();
            return { name: fileRef.name, downloadURL };
          })
        );

        setFiles(updatedFilesArray);
        setSelectedFile(null);

        console.log('File uploaded successfully.');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.warn('No file selected for upload.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>

      <h2>Fetched Files:</h2>
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            <a href={file.downloadURL} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploadButton;
