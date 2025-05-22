
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Show loading state while checking authentication
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse-soft text-primary">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  // If roles are specified, check if the user has the required role
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    const redirectPath = user.role === 'student' 
      ? '/student/dashboard' 
      : '/professor/dashboard';
    
    return <Navigate to={redirectPath} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
