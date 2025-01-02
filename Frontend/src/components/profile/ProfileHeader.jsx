import React from 'react';
import { Camera } from 'lucide-react';
import ProfilePictureUpload from './ProfilePictureUpload';

const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-white  dark:bg-dark-bg-secondary rounded-lg shadow-lg p-6 px-40">
      <div className="flex flex-col md:flex-row items-center  gap-6">
        <ProfilePictureUpload
          currentImage={user?.profilePicture}
          onUpload={(file) => console.log('Upload file:', file)}
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
            Member since {new Date(user?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;