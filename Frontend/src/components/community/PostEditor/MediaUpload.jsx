import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image, X } from 'lucide-react';

const MediaUpload = ({ onUpload, existingFiles = [] }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onUpload([...existingFiles, ...acceptedFiles]);
  }, [existingFiles, onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
      'video/*': ['.mp4', '.webm']
    },
    maxSize: 10485760, 
  });

  const removeFile = (index) => {
    const newFiles = [...existingFiles];
    newFiles.splice(index, 1);
    onUpload(newFiles);
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
                   ${isDragActive 
                     ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                     : 'border-gray-300 dark:border-gray-700'}`}
      >
        <input {...getInputProps()} />
        <Image className="w-8 h-8 mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {isDragActive
            ? 'Drop files here...'
            : 'Drag & drop files here, or click to select'}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
          Maximum file size: 10MB
        </p>
      </div>

      {existingFiles.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {existingFiles.map((file, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={`Upload ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaUpload;