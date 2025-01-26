export function getAuthTokens() {
  const token = localStorage.getItem('token');
  return token;
}