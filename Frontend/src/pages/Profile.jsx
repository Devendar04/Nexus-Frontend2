import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileForm from '../components/profile/ProfileForm';
import { useAuth } from '../contexts/AuthContext';
import DashboardNavbar from '../components/dashboard/DashboardNavbar';
const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-full mx-auto py-8 flex flex-col items-center">
      <DashboardNavbar />
      <ProfileHeader user={user} />
      <div className="mt-5">
        <ProfileForm user={user} />
      </div>
    </div>
  );
};

export default Profile;