
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-edu-blue-100 via-background to-edu-purple-100 dark:from-edu-blue-900/20 dark:via-background dark:to-edu-purple-900/20 p-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
