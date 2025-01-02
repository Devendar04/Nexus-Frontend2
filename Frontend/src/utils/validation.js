export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const errors = [];
  
  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long`);
  }
  if (!hasUpperCase) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!hasLowerCase) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!hasNumbers) {
    errors.push('Password must contain at least one number');
  }
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
export const validateProfile = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.phone && !/^\+?[\d\s-]+$/.test(values.phone)) {
    errors.phone = 'Invalid phone number';
  }

  if (values.bio && values.bio.length > 500) {
    errors.bio = 'Bio must be less than 500 characters';
  }

  return errors;
};
export const validatePost = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required';
  } else if (values.title.length < 5) {
    errors.title = 'Title must be at least 5 characters';
  }

  if (!values.content) {
    errors.content = 'Content is required';
  } else if (values.content.length < 20) {
    errors.content = 'Content must be at least 20 characters';
  }

  if (!values.category) {
    errors.category = 'Please select a category';
  }

  return errors;
};
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name) => {
  return name.length >= 2 && /^[a-zA-Z\s-]+$/.test(name);
};