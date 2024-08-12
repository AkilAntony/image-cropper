import { Route,Routes } from 'react-router-dom';
import './App.css';
import ImageSelector from './Components/ImageSelector/ImageSelector';
import ImageCropper from './Components/ImageCropper/ImageCropper';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path='/' element = { <ImageSelector />} />
        <Route path = '/imageCropper' element = {<ImageCropper />} /> 
      </Routes>
    </div>
  );
}

export default App;
