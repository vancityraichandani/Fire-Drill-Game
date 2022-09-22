import './App.css';
import UploadPage from './components/UploadPage';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  
  const [login, setLogin] = useState(false)
  

  return (
    <div className="App">
      <Navbar login={login} setLogin={setLogin}/>
      <UploadPage login={login} setLogin={setLogin}/>
    </div>
  );
}

export default App;
