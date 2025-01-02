import React,{useState,useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import { validateProfile } from '../../utils/validation';
import axios from 'axios';

const ProfileForm = ({ user }) => {
//     const [users, setUsers] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchProfile = async () => {
//         try {
//           setLoading(true);
//           setError(null);
          
//           const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
//               headers: {
//                   Authorization: `Bearer ${localStorage.getItem('token')}`,
//               },
//           });
//           setUsers(JSON.stringify(response.data));
          
  
//         } catch (err) {
//           setError(err.message);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchProfile();
//     }, []);
// if (loading) {
//     return <p className="text-center text-gray-700">Loading profile...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-600">Error: {error}</p>;
//   }
//   console.log(users)
  const initialValues = {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: user?.bio || '',
    notifications: {
      email: user?.notifications?.email ?? true,
      push: user?.notifications?.push ?? true
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validateProfile,
    updateProfile
  );

  async function updateProfile(formData) {
    // TODO: Implement profile update
    console.log('Updating profile:', formData);
  }
 
 

  return (
    <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-6 px-[5.7rem]">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Edit Profile
      </h2>
   

         <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
              />
            {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
              />
            {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
            bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
            />
          {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
            bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
            />
          {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            value={values.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
            bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
            />
          {errors.bio && (
              <p className="mt-1 text-sm text-red-600">{errors.bio}</p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Notifications
          </h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="notifications.email"
                checked={values.notifications.email}
                onChange={(e) => handleChange({
                    target: {
                        name: 'notifications.email',
                        value: e.target.checked
                    }
                })}
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                Email notifications
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="notifications.push"
                checked={values.notifications.push}
                onChange={(e) => handleChange({
                    target: {
                        name: 'notifications.push',
                        value: e.target.checked
                    }
                })}
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                Push notifications
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white 
            rounded-lg transition-colors"
            >
            Save Changes
          </button>
        </div>
      </form>

    </div>
  );
};

export default ProfileForm;