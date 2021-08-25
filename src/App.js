import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    download("./RIFAT AL- ASHWAD.pdf", "RIFAT AL- ASHWAD");
  },[])
  const download = (fileUrl, fileName) => {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }
  
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Thank you for downloading my cv.
        </p>
        
      </header>
    </div>
  );
}

export default App;
