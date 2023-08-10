import React from 'react';
import { useGoogleLogin } from 'react-google-login';

const Google = () => {
  const clientId = '284923616105-q0su619faegmu6me66pmb5b6t5ap0mol.apps.googleusercontent.com';

  const onSuccess = (response) => {
    console.log(response);
  }

  const onFailure = (error) => {
    console.log(error);
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    cookiePolicy: 'single_host_origin',
    isSignedIn: true
  });

  return (
    <>
    <button onClick={signIn} className="btn btn-primary">
      Sign in with Google
    </button>
    </>
  );
}

export default Google;