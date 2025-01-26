export function getAuthTokens() {
  const token = localStorage.getItem('token');
  return token;
}

export function tokenLoader() {
  return getAuthTokens();
}