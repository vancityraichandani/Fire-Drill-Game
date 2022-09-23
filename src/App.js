import './App.css';
import UploadPage from './components/UploadPage';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  
  const [login, setLogin] = useState(false)
  const [file, setFile] = useState(null);

  return (
    <div className="App">
      <Navbar login={login} setLogin={setLogin} file={file} setFile={setFile}/>
      <UploadPage login={login} setLogin={setLogin} file={file} setFile={setFile}/>
    </div>
  );
}

export default App;
