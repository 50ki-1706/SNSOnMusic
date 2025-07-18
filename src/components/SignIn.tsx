'use client';

import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <button className='rounded-xl p-3 ring-1 ring-slate-400' onClick={() => signIn('google')}>
      Signin with Google
    </button>
  );
};

export default SignIn;
