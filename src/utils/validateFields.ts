export const validateEmail = (email: string) => {
  const trimmedEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    alert('Please enter a valid email address.');
    return false;
  } else {
    return true;
  }
};
export const validatePassword = (password: string) => {
  const trimmedPassword = password.trim();
  if (trimmedPassword.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  } else {
    return true;
  }
};
export const validateText = (text: string) => {
  const trimmedPassword = text.trim();
  if (trimmedPassword.length < 0) {
    alert(`${text} must not be empty`);
    return false;
  } else {
    return true;
  }
};
