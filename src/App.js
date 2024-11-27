import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Camera from './component/Camera';
import Gallary from './component/Gallary'
import Navbar from './component/Navbar';


function App() {
  const [images, setImages] = useState([]);

  const handleCapture = (imageData)=>{
    setImages((prevImage=>
    [...prevImage, imageData]))
  }

  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Camera onCapture={handleCapture} />} />
          <Route path="/gallery" element={<Gallary images={images} onDelete={handleDelete} />} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
