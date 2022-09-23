import './App.css';
import UploadPage from './components/UploadPage';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  
  const [login, setLogin] = useState(false)
  const [file, setFile] = useState(null);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="App">
      <Navbar login={login} setLogin={setLogin} file={file} setFile={setFile} submit={submit} setSubmit={setSubmit}/>
      <UploadPage login={login} setLogin={setLogin} file={file} setFile={setFile}  submit={submit} setSubmit={setSubmit}/>
    </div>
  );
}

export default App;
