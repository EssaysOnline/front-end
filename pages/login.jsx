import React from 'react';
import Link from 'next/link';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-[white]">
            Login
          </h2>
          <p className="mt-2  text-center text-sm text-gray-600 dark:text-[#286bb8]  ">
            Or{'  '}
            <Link
              href={'/signup'}
              className="font-medium text-[#286bb8] hover:text-[#286bb8] dark:text-[white] "
            >
              Create a new account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
