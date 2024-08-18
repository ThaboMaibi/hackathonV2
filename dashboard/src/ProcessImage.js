import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Box, CircularProgress, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import UploadIcon from '@mui/icons-material/Upload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
// Styled components
const ImagePreview = styled('img')({
  maxWidth: '100%',
  maxHeight: '400px',
  display: 'block',
  borderRadius: '8px',
  border: '1px solid #ddd',
});

const ProcessImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cementBags, setCementBags] = useState(0);
  const [price, setPrice] = useState(0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result); // This is the base64 image data
        setProcessedImage(null); // Clear the processed image when a new image is uploaded
      };

      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    submitImageToApi();
  };


  const submitImageToApi = async () => {
    if (!selectedImage) return;

    const base64Image = selectedImage.split(',')[1]; // Extract base64 part of the image

    try {
      const response = await axios.post("https://detect.roboflow.com/pothole-segmentation-o1kix/3", base64Image, {
        params: {
          api_key: "8eu0AXvuYsVZBGEZHazo"
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      const result = response.data;
      console.log("real pred", result.predictions);
      setCementBags(10); // Example data
      setPrice(150); // Example data

      // Draw the predictions directly onto the image
      drawPredictionsOnImage(selectedImage, result.predictions).then((processedImageURL) => {
      setProcessedImage(processedImageURL);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const drawPredictionsOnImage = (imageSrc, predictions) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageSrc;
  
      img.onload = () => {
        // Create a canvas and set its dimensions to match the image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
  
        // Set the drawing style for the lines
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round'; // Ensure the line joins are smooth
        ctx.lineCap = 'round'; // Ensure the line ends are smooth
  
        // Draw a line connecting all points
        if (predictions.length > 0) {
          const firstPoint = predictions[0];
          ctx.beginPath();
          ctx.moveTo(firstPoint.x, firstPoint.y);
  
          predictions.forEach(prediction => {
            const { x, y } = prediction;
            ctx.lineTo(x, y);
          });
  
          ctx.stroke(); // Draw the line
        }
  
        // Convert the canvas to a data URL
        const processedImageURL = canvas.toDataURL('image/png');
        resolve(processedImageURL);
      };
  
      img.onerror = (error) => {
        console.error('Error loading image:', error);
        resolve(null);
      };
    });
  };
  
  
  
  

  return (
    <Card sx={{ boxShadow: 3, borderRadius: '12px', overflow: 'hidden' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Pothole processing
        </Typography>
        <Typography variant="body1" paragraph>
          This part can be integrated into apps for pothole data collection with their specific location since Google Maps images are not clear enough. The data collection can also be done via video recording.
        </Typography>
        <Button
          variant="contained"
          component="label"
          startIcon={<UploadIcon />}
          sx={{ mb: 2 }}
        >
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </Button>
        {selectedImage && (
          <Box mt={2}>
            <Typography variant="body1" gutterBottom>
              Image Preview:
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <ImagePreview src={selectedImage} alt="Selected" />
              {processedImage && !isLoading&&(
                <>
                  <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                  <ImagePreview src={processedImage} alt="Processed" />
                </>
              )}
            </Box>
          </Box>
        )}
        {selectedImage && !isLoading && !processedImage && (
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit for Processing
            </Button>
            <Divider sx={{ mt: 3 }} />
          </Box>
        )}
        {isLoading && (
          <Box mt={2} display="flex" flexDirection="column" alignItems="center">
            <CircularProgress />
            <Typography variant="body2" sx={{ mt: 2 }}>
              Processing your image. Please wait...
            </Typography>
          </Box>
        )}
        {!isLoading && processedImage && (
          <Box mt={2} textAlign="center">
            <Typography variant="body1" gutterBottom>
              <CheckCircleIcon color="success" sx={{ mr: 1 }} />
              Image processed successfully!
            </Typography>
            <Typography variant="body1">Amount of Cement Bags Required: <strong>{cementBags}</strong></Typography>
            <Typography variant="body1">Total Price: <strong>${price}</strong></Typography>
            <Typography variant="body1">Location: <strong>"your current location"</strong></Typography>
            <Button variant='outlined' sx={{ mt: 2 }}>Submit Information</Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ProcessImage;
