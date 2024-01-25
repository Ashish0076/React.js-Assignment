import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './FileUploader.css';

const FileUploader = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      setExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="file-uploader-container">
      <div
        className="drop-area"
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id="fileInput"
          className="file-input"
          onChange={handleFileUpload}
        />
        <label htmlFor="fileInput">
          <strong>Drag & Drop</strong> or <span>Browse</span>
        </label>
      </div>

      {excelData.length > 0 && (
        <table className="excel-table">
          <thead>
            <tr>
              {Object.keys(excelData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FileUploader;
