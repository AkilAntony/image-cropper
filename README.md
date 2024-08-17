# Image Cropper Project

## Overview
This project is a React application that allows users to upload an image, crop it to their desired dimensions, and submit the cropped image. The cropping functionality is provided by the react-image-crop library.

## Features
- Image Upload: Users can upload images to be cropped.
- Image Cropping: Allows users to select a portion of the image to crop using react-image-crop.
- Preview: Displays a preview of the cropped image.
- Submission: Sends the cropped image to a server endpoint.
- Download: Now you can download the cropped image to your local ( NEW)

## Installation
Clone the Repository: https://github.com/AkilAntony/image-cropper
 
1. Navigate to the Project Directory: cd image-cropper

2. Install Dependencies: npm install
 
3. Start the Development Server: npm start
This will start the application on http://localhost:3000.

Upload an Image:

Click the upload button to select an image file.
Crop the Image:

Use the cropping tool to select the desired area of the image.
Submit the Cropped Image:

Click the "Submit Image" button to send the cropped image to the server.

## Configuration
- Server Endpoint: Update the endpoint URL in the handleSubmit function in ImageCropper.js to match your server URL.
javascript
 
const response = await axios.post('YOUR_SERVER_ENDPOINT', { image: result });

## File Structure
- src/: Contains the React components and application logic.
- ImageCropper.js: Main component for image cropping functionality.
- App.js: Application entry point.
- index.js: Renders the React application.
- public/: Contains public assets like index.html.
- package.json: Contains project metadata and dependencies.

## Dependencies
- react: JavaScript library for building user interfaces.
- react-image-crop: Library for image cropping.
- axios: Promise-based HTTP client for the browser and Node.js.

## Troubleshooting
- Issue: "Cannot read properties of null (reading 'naturalWidth')"
-Solution: Ensure that the image state is correctly set and is not null before accessing its properties.
