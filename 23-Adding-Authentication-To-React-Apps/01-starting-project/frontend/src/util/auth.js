import { redirect } from 'react-router-dom';

export function getAuthTokens() {
  const token = localStorage.getItem('token');
  return token;
}

export function tokenLoader() {
  return getAuthTokens();
}

export function checkAuthLoader(){
    const token = getAuthTokens();

    if(!token){
        return redirect('/auth');
    }
}