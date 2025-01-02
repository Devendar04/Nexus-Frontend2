import React, { useRef } from 'react';
import { Camera, User } from 'lucide-react';

const ProfilePictureUpload = ({ currentImage, onUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="relative">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        {currentImage ? (
          <img
            src={currentImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>
      
      <button
        onClick={() => fileInputRef.current?.click()}
        className="absolute bottom-0 right-0 p-2 bg-green-600 text-white rounded-full 
                 hover:bg-green-700 transition-colors"
        aria-label="Upload profile picture"
      >
        <Camera className="w-5 h-5" />
      </button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfilePictureUpload;