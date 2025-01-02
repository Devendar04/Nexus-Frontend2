import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const { error, loading, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Check if passwords match before proceeding
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Call the register function from AuthContext
    register(
      firstName,
      lastName,
      email,
      password
    );
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "acceptTerms" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-dark-bg-secondary p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Create your account
          </h2>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 
                             border border-gray-300 dark:border-gray-700 placeholder-gray-500 
                             text-gray-900 dark:text-white bg-white dark:bg-dark-bg-primary
                             focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="First name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 
                           border border-gray-300 dark:border-gray-700 placeholder-gray-500 
                           text-gray-900 dark:text-white bg-white dark:bg-dark-bg-primary
                           focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 
                           border border-gray-300 dark:border-gray-700 placeholder-gray-500 
                           text-gray-900 dark:text-white bg-white dark:bg-dark-bg-primary
                           focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-10 px-3 py-2 
                           border border-gray-300 dark:border-gray-700 placeholder-gray-500 
                           text-gray-900 dark:text-white bg-white dark:bg-dark-bg-primary
                           focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 
                           border border-gray-300 dark:border-gray-700 placeholder-gray-500 
                           text-gray-900 dark:text-white bg-white dark:bg-dark-bg-primary
                           focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 
             border-gray-300 rounded"
              />
              <label
                htmlFor="acceptTerms"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                I accept the{" "}
                <Link
                  to="/terms"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  terms and conditions
                </Link>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                       text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                       disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!formData.acceptTerms} // Disable the button if terms are not accepted
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
