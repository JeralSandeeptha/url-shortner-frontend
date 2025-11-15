export const validateEmail = (email: string) => {
  const trimmedEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return false;
  } else {
    return true;
  }
};
export const validatePassword = (password: string) => {
  const trimmedPassword = password.trim();
  if (trimmedPassword.length < 6) {
    return false;
  } else {
    return true;
  }
};
export const validateText = (text: string) => {
  const trimmedPassword = text.trim();
  if (trimmedPassword.length < 0) {
    return false;
  } else {
    return true;
  }
};
