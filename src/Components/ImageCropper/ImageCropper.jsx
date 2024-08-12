import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageCropper.css';
import axios from 'axios';

const ImageCropper = () => {
  const location = useLocation();
  const { selectedImageUrl } = location.state || {};
  const [crop, setCrop] = useState({
  unit: 'px', // Can be 'px' or '%'
  x: 0,
  y: 0,
  width: 0,
  height: 0
});
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [warning,setWarning] =  useState('')

 const getCroppedImage = () => {
  if (!image) return;
   const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );

        // Converting to base64
        const base64Image = canvas.toDataURL('image/jpeg');
        setResult(base64Image);
  
       console.log(image.clientWidth );
       console.log(image,'image')
    };

    // send the image to the server
    const handleSubmit = async() =>{
      if(!result) setWarning('Please Crop your image first')
      try{
        const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', {image:result});
        console.log(response.data)
        setWarning(''); 
      }
      catch(err){
        console.log(err);
        setWarning('Failed to upload image. Please try again.')
      }
    }
 
  return (
    <div className='flex md:h-[100vh] w-full px-3 bg-slate-200
          md:flex-row flex-col items-center justify-around gap-10 min-h-[100vh]'>
      {selectedImageUrl && (
        <div className="cropperContainer ">
          <h1 className='font-bold text-3xl'>Crop Your Image</h1>
          <ReactCrop
            crop={crop}
            onChange={(newCrop => setCrop(newCrop))}
            onComplete={(e)=>console.log('complete',e)}
            width = {500}
            onLoaded
           >
            <img src={selectedImageUrl} 
              onLoad={(e) => setImage(e.target)} onClick={(e) => setImage(e.target)} />
          </ReactCrop>
          <button 
            onClick={getCroppedImage}
            className='w-52 py-3 rounded-md bg-cyan-600 text-white
              border-none mt-3'>
              Crop Image</button>
        </div>
      )}

       {result && (
            <div className="resultContainer flex 
                flex-col gap-4 items-center justify-center">
              <h1 className='font-bold text-3xl mb-3'>Your Cropped Image</h1>
              <img src={result} alt="img" />
              <button
                 onClick={handleSubmit}
                 className='w-52 py-3 rounded-md bg-green-700 text-white
              border-none'>Submit</button>
              {
                warning && <p>{warning}</p>
              }
            </div>
          )}
    </div>
  );
};

export default ImageCropper