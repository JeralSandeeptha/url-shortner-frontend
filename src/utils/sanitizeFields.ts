export const sanitizeEmail = (email: string): string => {
  const trimmedEmail = email.trim();
  return trimmedEmail;
};
export const sanitizePassword = (password: string): string => {
  const trimmedPassword = password.trim();
  return trimmedPassword;
};
