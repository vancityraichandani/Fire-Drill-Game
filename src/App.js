import './App.css';
import UploadPage from './components/UploadPage';
import bg from './assets/bg.png'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UploadPage />
    </div>
  );
}

export default App;
