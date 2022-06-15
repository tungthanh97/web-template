export const baseHeader = () => {
  return { 'Content-Type': 'application/json' };
};

export const authHeader = (token?: string) => {
  if (!token) return baseHeader();
  return Object.assign(baseHeader(), { Authorization: `Bearer ${token}` });
};
