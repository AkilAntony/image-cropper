import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const ImageSelector = () => {
    const [selectedImageUrl,setSelectedImageUrl] =  useState('');
    const navigate = useNavigate();
    const handleImageSelector = (e) => {
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setSelectedImageUrl(reader.result);
            }
            reader.readAsDataURL(file)
        }
        
    }
     // Using useEffect to navigate after the image URL is set
    useEffect(() => {
        if (selectedImageUrl) navigate('/imageCropper', {state:{selectedImageUrl}});
    }, [selectedImageUrl, navigate]);
   
  return (
     <div className='flex h-screen items-center justify-center flex-col px-3'>
      <h2 className='font-bold text-3xl mb-10'>Crop Image</h2>
      <p className='text-xl'>Crop 
        <em className='text-cyan-400 font-bold'> JPG</em>,
        <em className='text-cyan-400 font-bold'>PNG </em>or 
        <em className='text-cyan-400 font-bold'> GIF </em> 
        by defining a rectangle in pixels.Cut your image online.
      </p>
     
        <input type="file" 
            name="image" 
            accept='image/*' 
            onChange={handleImageSelector}
            />
    
    </div>
  )
}

export default ImageSelector
