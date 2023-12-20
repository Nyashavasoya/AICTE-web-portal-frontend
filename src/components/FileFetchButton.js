// FileFetchButton.js
import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { list, ref, getDownloadURL } from 'firebase/storage';
import axios from 'axios';

const FileFetchButton = () => {
  const [loading,setLoading] = useState(false)
  const [files, setFiles] = useState([]);
  const fileIncrease = ()=>{
    setFiles((files)=>files.length +1)
  }
  const fetchFiles = async () => {
    try {
      const folderRef = ref(storage, 'path/to/upload');
      const filesList = await list(folderRef);
      const filesArray = await Promise.all(
        filesList.items.map(async (fileRef) => {
          const downloadURL = await getDownloadURL(fileRef);
          return { name: fileRef.name, downloadURL };
        })
      );

      setFiles(filesArray);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };
  // useEffect(() => {
  //   console.log("one")
    

    
  // }, []);

  const handleGenerateTemplate = async () => {
    try {
      setLoading(true)
      // Make a request to the '/templateGeneration' route
      const response = await axios.get('http://localhost:3500/templateGeneration');
      await fetchFiles();
      // Handle the response as needed
      console.log(response.data.message);
      setLoading(false)
      // You can add more logic here based on the response

    } catch (error) {
      console.error('Error generating template:', error);
      // Handle the error as needed
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Fetched Files from "templates" folder:</h2>
      <ul className="space-y-4">
        {files.map((file) => (
          <li key={file.name} className="flex items-center justify-between bg-gray-100 p-4 rounded">
            <a
              href={file.downloadURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
      <h1>Certificates : </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGenerateTemplate}
      >
        Generate Template
      </button>
      {loading && (<h2>Loading... </h2>)}
    </div>
  );
};

export default FileFetchButton;
