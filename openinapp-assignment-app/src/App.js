import React from 'react';
import FileUploader from './components/FileUploader';
import MenuBar from './components/MenuBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <MenuBar />
      <div className="main-content">
        <h1>Upload CSV</h1>
        <FileUploader />
      </div>
    </div>
  );
}


export default App;

