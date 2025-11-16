export const extractUsername = (email: string): string => {
  const username = email.split('@')[0];
  return username;
};
