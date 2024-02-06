// Upload.js

import React from "react";

const Upload = () => {
  const handleUploadClick = () => {
    // Trigger the click event of the hidden file input
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleFileChange = (event) => {
    // Handle the selected file
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Perform any additional logic or upload functionality here
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <div className="container mx-auto my-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Let's Start!</h1>
      <p className="mb-8">
        Add a photo to make a scan. You can upload a photo from your device or take a photo with the camera (available for mobiles).
      </p>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        className="bg-[#0e21fe] px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700 transition duration-300"
        onClick={handleUploadClick}
      >
        Upload Image
      </button><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
};

export default Upload;
