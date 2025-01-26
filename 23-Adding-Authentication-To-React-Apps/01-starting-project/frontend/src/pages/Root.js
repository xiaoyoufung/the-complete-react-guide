import { useEffect, useSubmit } from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { action } from './EventDetail';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
    if(!token){
      return;
    }

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
